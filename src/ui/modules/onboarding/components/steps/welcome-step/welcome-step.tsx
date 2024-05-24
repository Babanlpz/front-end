import { BaseCompponentProps } from "@/types/onboarding-steps-list";
import { Button } from "@/ui/design-systeme/button/button";

export const WelcomeStep = ({ next }: BaseCompponentProps) => {
  return (
    <>
      <div>
        Welcome Step component
        <Button action={next}>Next</Button>
      </div>
    </>
  );
};
