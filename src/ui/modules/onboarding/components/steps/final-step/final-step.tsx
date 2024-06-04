import { firestoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { BaseCompponentProps } from "@/types/onboarding-steps-list";
import { Container } from "@/ui/components/container/container";
import { Logo } from "@/ui/design-systeme/logo/logo";
import { Typography } from "@/ui/design-systeme/typography/typography";
import { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { toast } from "react-toastify";
import { OnboardingFooter } from "../../footer/onboarding-footer";

export const FinalStep = ({ isFinalStep }: BaseCompponentProps) => {
  const { authUser } = useAuth();
  const { value: isLoading, toggle } = useToggle();

  // Setting confetti animation
  const refAnimationInstance = useRef<((opts: any) => void) | null>(null);
  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);
  const makeShot = useCallback((particleRatio: number, opts: any) => {
    if (refAnimationInstance.current !== null) {
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
    }
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, { spread: 26, startVelocity: 55 });
    makeShot(0.2, { spread: 60 });
    makeShot(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  }, [makeShot]);

  useEffect(() => {
    setTimeout(() => {
      fire();
    }, 50);
  }, []);

  const handleCloseOnboarding = async () => {
    toggle();
    const { error } = await firestoreUpdateDocument("users", authUser.uid, {
      onboardingIsCompleted: true,
    });
    if (error) {
      toggle();
      toast.error("Une erreur est survenue, veuillez réessayer plus tard");
      return;
    }
    toggle();
    toast.success("Ton onboarding est terminé, bienvenue dans la communauté !");
  };

  return (
    <>
      <ReactCanvasConfetti
        // refConfetti={getInstance}
        style={{
          zIndex: 9999,
          position: "fixed",
          width: "100%",
          height: "100%",
          top: -80,
          left: 0,
        }}
      />
      <div className="relative h-screen pb-[-91px]">
        <div className="h-full overflow-auto ">
          <Container className="h-full">
            <div className="relative z-10 flex items-center h-full py-10">
              <div className="w-full max-w-xl mx-auto space-y-5 pb-4.5">
                <div className="flex justify-center">
                  <Logo size="large" />
                </div>
                <Typography variant="h1" component="h1" className="text-center">
                  Félicitations !
                </Typography>
                <Typography
                  variant="body-base"
                  component="p"
                  theme="gray"
                  className="text-center"
                >
                  Tu fais maintenant partie des robots codeurs ! Nous sommes
                  ravis de t'acceuillir parmi nous. Tu vas pouvoir te lancer
                  dans l'aventure, partager tes projets les plus fous et
                  rencontrer des développeurs aussi passionés que toi. Alors
                  prépare-toi, car notre communauté est prête à te secouer les
                  câbles et a te faire une mise à jour de ton système de
                  développement web !
                </Typography>
              </div>
            </div>
          </Container>
        </div>{" "}
        <OnboardingFooter
          next={handleCloseOnboarding}
          isFinalStep={isFinalStep}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};
