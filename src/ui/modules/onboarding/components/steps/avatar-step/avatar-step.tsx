import { updateUserIdentificationData } from "@/api/authentication";
import { firestoreUpdateDocument } from "@/api/firestore";
import { storage } from "@/config/firebase-config";
import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { BaseCompponentProps } from "@/types/onboarding-steps-list";
import { Container } from "@/ui/components/container/container";
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar";
import { Typography } from "@/ui/design-systeme/typography/typography";
import {
  StorageReference,
  UploadTask,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { toast } from "react-toastify";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { OnboardingTabs } from "../../tabs/onboarding-tabs.tsx";

export const AvatarStep = ({
  next,
  prev,
  isFinalStep,
  stepList,
  getCurrentStep,
}: BaseCompponentProps) => {
  const { authUser } = useAuth();
  const { value: isLoading, toggle } = useToggle();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );

  const [uploadProgress, setUploadProgress] = useState<number>(0);

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

  const updateUserDocument = async (photoURL: string) => {
    const body = {
      photoURL: photoURL,
    };
    await updateUserIdentificationData(authUser?.uid, body);

    const { error } = await firestoreUpdateDocument(
      "users",
      authUser?.uid,
      body
    );
    if (error) {
      toggle();
      toast.error(
        "Une erreur est survenue lors de la mise à jour de votre photo de profil"
      );
      return;
    }
    toggle();
    next();
  };

  // en francais : "Une erreur est survenue lors de l'envoi de l'image"
  const handleUploadImage = async () => {
    let storageRef: StorageReference;
    let uploadTask: UploadTask;

    if (selectedImage !== null) {
      toggle();
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
          toggle();
          toast.error("Une erreur est survenue lors de l'envoi de l'image");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log(":: downloadURL ::", downloadURL);
          });
        }
      );
    } else {
      next();
    }
  };

  return (
    <>
      <div className="relative h-screen pb-[-91px]">
        <div className="h-full overflow-auto ">
          <Container className="grid h-full grid-cols-12">
            <div className="relative z-10 flex items-center h-full col-span-6 py-10 ">
              <div className="w-full space-y-5 pb-4.5">
                <OnboardingTabs
                  tabs={stepList}
                  getCurrentStep={getCurrentStep}
                />
                <Typography variant="h1" component="h1">
                  Dèrnière étape !
                </Typography>
                <Typography variant="body-base" component="p" theme="gray">
                  C'est sûr t'as une tête à être un robot ! Ajoute une photo de
                  profil pour que les autres puissent te reconnaître. 🤖
                </Typography>
              </div>
            </div>
            <div className="flex items-center h-full col-span-6">
              <div className="flex justify-center w-full">
                <UploadAvatar
                  handleImageSelect={handleImageSelect}
                  imagePreview={imagePreview}
                />
              </div>
            </div>
          </Container>
        </div>{" "}
        <OnboardingFooter
          prev={prev}
          next={handleUploadImage}
          isFinalStep={isFinalStep}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};
