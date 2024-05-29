import { useToggle } from "@/hooks/use-toggle";
import { OnboardingProfileFormFieldsType } from "@/types/forms";
import { BaseCompponentProps } from "@/types/onboarding-steps-list";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-systeme/typography/typography";
import { SubmitHandler, useForm } from "react-hook-form";
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
  const { value: isLoading, setValue: setLoading } = useToggle();
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm<OnboardingProfileFormFieldsType>();

  const onSubmit: SubmitHandler<OnboardingProfileFormFieldsType> = async (
    formData
  ) => {
    setLoading(true);

    //.....
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
          next={next}
          isFirstStep={isFirstStep}
          isFinalStep={isFinalStep}
        />
      </div>
    </>
  );
};
