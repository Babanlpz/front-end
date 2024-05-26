import { BaseCompponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";

export const WelcomeStep = ({
  next,
  isFirstStep,
  isFinalStep,
}: BaseCompponentProps) => {
  return (
    <>
      <div className="relative h-screen">
        Welcome Step component
        <OnboardingFooter
          next={next}
          isFirstStep={isFirstStep}
          isFinalStep={isFinalStep}
        />
      </div>
    </>
  );
};
