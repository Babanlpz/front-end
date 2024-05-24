/** COMPONENTS   */
import { REGISTERED } from "@/lib/session-status";
import { Seo } from "@/ui/components/seo/seo";
import { OnboardingContainer } from "@/ui/modules/onboarding/onboarding.container";
import { Session } from "@/ui/session/session";

export default function Onboarding() {
  return (
    <>
      <Seo title="OnBoarding" description="Description de la page Onboarding" />

      <Session sessionStatus={REGISTERED}>
        <OnboardingContainer />
      </Session>
    </>
  );
}
