import { updateUserIdentificationData } from "@/api/authentication";
import { firestoreUpdateDocument } from "@/api/firestore";
import { storage } from "@/config/firebase-config";
import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { UserProfileFormFieldsType } from "@/types/forms";
import {
  StorageReference,
  UploadTask,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ProfileView } from "./profile.view";

export const ProfileContainer = () => {
  const { authUser } = useAuth();
  const { value: isLoading, setValue: setLoading } = useToggle();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setValue,
    setError,
    reset,
  } = useForm<UserProfileFormFieldsType>();

  const { displayName, expertise, biography, linkedin, github } =
    authUser.userDocument;

  useEffect(() => {
    const fieldsToUpdate: (
      | "displayName"
      | "expertise"
      | "biography"
      | "linkedin"
      | "github"
    )[] = ["displayName", "expertise", "biography", "linkedin", "github"];

    for (const field of fieldsToUpdate) {
      setValue(field, authUser.userDocument[field]);
    }
  }, []);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        let imgDataUrl: string | ArrayBuffer | null = null;
        if (e.target) {
          imgDataUrl = e.target.result;
        }
        setImagePreview(imgDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadImage = async () => {
    let storageRef: StorageReference;
    let uploadTask: UploadTask;

    if (selectedImage !== null) {
      setLoading(true);
      storageRef = ref(
        storage,
        `user-medias/${authUser?.uid}/avatar/avatar-${authUser?.uid}`
      );
      uploadTask = uploadBytesResumable(storageRef, selectedImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error(error);
          setLoading(false);
          toast.error("Une erreur est survenue lors de l'envoi de l'image");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateUserAvatar(downloadURL);
          });
        }
      );
    }
  };

  const updateUserAvatar = async (photoURL: string) => {
    const body = {
      photoURL: photoURL,
    };
    await updateUserIdentificationData(authUser.uid, body);
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      body
    );
    if (error) {
      setLoading(false);
      toast.error(
        "Une erreur est survenue lors de la mise à jour de votre photo de profil"
      );
      return;
    }
    setLoading(false);
  };

  const handleUpdateUserDocument = async (
    formData: UserProfileFormFieldsType
  ) => {
    setLoading(true);
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      formData
    );

    if (error) {
      setLoading(false);
      toast.error("Une erreur est survenue, veuillez réessayer");
      return;
    }
    toast.success("Profil mis à jour avec succès");
    reset();
    setLoading(false);
  };

  const onSubmit: SubmitHandler<UserProfileFormFieldsType> = async (
    formData
  ) => {
    if (selectedImage) {
      handleUploadImage();
    }

    if (formData.linkedin && !formData.linkedin.includes("linkedin.com/")) {
      setError("linkedin", {
        type: "manual",
        message: "Le lien doit être un lien LinkedIn valide",
      });
      return;
    }
    if (formData.github && !formData.github.includes("github.com/")) {
      setError("github", {
        type: "manual",
        message: "Le lien doit être un lien Github valide",
      });
      return;
    }

    if (
      displayName !== formData.displayName ||
      expertise !== formData.expertise ||
      biography !== formData.biography ||
      linkedin !== formData.linkedin ||
      github !== formData.github
    ) {
      if (
        displayName !== formData.displayName ||
        authUser.displayName !== formData.displayName
      ) {
        const body = {
          displayName: formData.displayName,
        };
        const { error } = await updateUserIdentificationData(
          authUser.uid,
          body
        );
        if (error) {
          setLoading(false);
          toast.error("Une erreur est survenue, veuillez réessayer");
          return;
        }
      }

      for (const key in formData) {
        if (
          formData.hasOwnProperty(key) &&
          formData[key as keyof UserProfileFormFieldsType] === undefined
        ) {
          delete formData[key as keyof UserProfileFormFieldsType];
        }
      }

      handleUpdateUserDocument(formData);
      return;
    }
  };

  return (
    <>
      <ProfileView
        imagePreview={imagePreview}
        handleImageSelect={handleImageSelect}
        uploadProgress={uploadProgress}
        form={{
          errors,
          control,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
        }}
      />
    </>
  );
};
