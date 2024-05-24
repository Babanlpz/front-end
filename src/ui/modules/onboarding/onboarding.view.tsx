import { BaseCompponentProps } from "@/types/onboarding-steps-list";

export const OnboardingView = ({
  getCurrentStep,
  next,
  prev,
  isFirstStep,
  isFinalStep,
  stepList,
}: BaseCompponentProps) => {
  if (getCurrentStep()?.component) {
    const Component = getCurrentStep()?.component.step;

    return (
      <>
        <div>
          {Component && (
            <Component
              next={next}
              prev={prev}
              isFirstStep={isFirstStep}
              isFinalStep={isFinalStep}
              stepList={stepList}
              getCurrentStep={getCurrentStep}
            />
          )}
        </div>
      </>
    );
  }

  return null;
};
