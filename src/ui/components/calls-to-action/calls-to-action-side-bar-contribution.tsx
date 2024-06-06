import { Button } from "@/ui/design-systeme/button/button";
import { Typography } from "@/ui/design-systeme/typography/typography";
import Image from "next/image";

export const CallsToActionSideBarContribution = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center gap-5 px-8 py-12 overflow-hidden rounded pb-44 bg-primary">
        <Typography
          variant="lead"
          theme="white"
          weight="medium"
          className="text-center"
        >
          Récompense mes efforts
        </Typography>
        <div className="flex justify-center">
          <Button
            variant="success"
            baseUrl="https://google.com"
            linkType="external"
          >
            Faire un don libre
          </Button>
        </div>
        <Image
          width={300}
          height={200}
          src="/assets/images/pig.webp"
          alt="Donnation pig"
          className="absolute -bottom-20 transform -translate-x-1/2 left-1/2 rotate-45"
        />
      </div>
    </>
  );
};
