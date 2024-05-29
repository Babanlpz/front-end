import { firestoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { OnboardingProfileFormFieldsType } from "@/types/forms";
import { BaseCompponentProps } from "@/types/onboarding-steps-list";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-systeme/typography/typography";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { OnboardingTabs } from "../../tabs/onboarding-tabs.tsx";
import { ProfileStepForm } from "./profile-step-form";

export const ProfileStep = ({
  next,
  prev,
  isFirstStep,
  isFinalStep,
  stepList,
  getCurrentStep,
}: BaseCompponentProps) => {
  const { authUser } = useAuth();
  const { value: isLoading, setValue: setLoading } = useToggle();
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm<OnboardingProfileFormFieldsType>();

  const { displayName, expertise, biography } = authUser.userDocument;

  // Display value is exist
  useEffect(() => {
    const fieldsToUpdate: ("displayName" | "expertise" | "biography")[] = [
      "displayName",
      "expertise",
      "biography",
    ];

    for (const field of fieldsToUpdate) {
      setValue(field, authUser.userDocument[field]);
    }
  }, []);

  const handleUpdateUserDocument = async (
    formData: OnboardingProfileFormFieldsType
  ) => {
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      formData
    );
    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }
    setLoading(false);
    reset();
    next();
  };

  const onSubmit: SubmitHandler<OnboardingProfileFormFieldsType> = async (
    formData
  ) => {
    setLoading(true);

    if (
      displayName !== formData.displayName ||
      expertise !== formData.expertise ||
      biography !== formData.biography
    ) {
      handleUpdateUserDocument(formData);
    }
    setLoading(false);
    next();
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
                  Présente-toi !
                </Typography>
                <Typography variant="body-base" component="p" theme="gray">
                  Dis nous tout sur toi ! Remplis notre formulaire de
                  présentation pour qu'on puisse mieux te connaître. On veut
                  savoir qui tu es, ce que tu fais et comment t'as atteri ici.
                  Plus on en saura sur toi, mieux on pourra personnaliser ton
                  expérience sur notre plateforme.
                </Typography>
              </div>
            </div>
            <div className="flex items-center h-full col-span-6">
              <div className="flex justify-end w-full">
                <ProfileStepForm
                  form={{
                    errors,
                    control,
                    register,
                    handleSubmit,
                    onSubmit,
                    isLoading,
                  }}
                />
              </div>
            </div>
          </Container>
        </div>{" "}
        <OnboardingFooter
          prev={prev}
          next={handleSubmit(onSubmit)}
          isFirstStep={isFirstStep}
          isFinalStep={isFinalStep}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};
