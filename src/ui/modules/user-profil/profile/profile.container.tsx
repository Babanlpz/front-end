import { firestoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { UserProfileFormFieldsType } from "@/types/forms";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ProfileView } from "./profile.view";

export const ProfileContainer = () => {
  const { authUser } = useAuth();
  const { value: isLoading, setValue: setLoading } = useToggle();

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setValue,
    setError,
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
    setLoading(false);
  };

  const onSubmit: SubmitHandler<UserProfileFormFieldsType> = async (
    formData
  ) => {
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
