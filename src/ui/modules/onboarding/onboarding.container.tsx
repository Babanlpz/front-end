import { onboardingStepsListInterface } from "@/types/onboarding-steps-list";
import { useState } from "react";
import { ProfileStep } from "./components/steps/profile-step/profile-step";
import { WelcomeStep } from "./components/steps/welcome-step/welcome-step";
import { OnboardingView } from "./onboarding.view";

export const OnboardingContainer = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const stepList: onboardingStepsListInterface[] = [
    {
      id: 1,
      label: "Bienvenue",
      component: { step: WelcomeStep },
    },
    {
      id: 2,
      label: "Profile",
      component: { step: ProfileStep },
    },
    {
      id: 3,
      label: "Avatar",
      component: { step: ProfileStep },
    },
  ];

  const getCurrentStep = () => {
    return stepList.find((el) => el.id === currentStep);
  };

  const next = () => {
    if (currentStep < stepList.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isFirstStep = () => {
    if (currentStep === 1) {
      return true;
    }
    return false;
  };

  const isFinalStep = () => {
    if (currentStep === stepList.length) {
      return true;
    }
    return false;
  };

  return (
    <>
      <OnboardingView
        getCurrentStep={getCurrentStep}
        next={next}
        prev={prev}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
        stepList={stepList}
      />
    </>
  );
};
