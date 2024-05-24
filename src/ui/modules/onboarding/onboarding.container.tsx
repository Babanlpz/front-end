import { OnboardingView } from "./onboarding.view";
import { useState } from "react";

export const OnboardingContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <OnboardingView />
    </>
  );
};
