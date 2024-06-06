import { Button } from "@/ui/design-systeme/button/button";
import { Typography } from "@/ui/design-systeme/typography/typography";
import Image from "next/image";

export const CallsToActionSideBarLinkedin = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center gap-5 px-8 py-12 overflow-hidden rounded pb-44 bg-secondary-300">
        <Typography variant="lead" weight="medium" className="text-center">
          Rejoins moi sur Linkedin
        </Typography>
        <div className="flex justify-center cursor-pointer">
          <Button
            variant="accent"
            baseUrl="https://google.com"
            linkType="external"
          >
            Rejoindre
          </Button>
        </div>
        <Image
          width={300}
          height={200}
          src="/assets/images/linkedin.webp"
          alt="Linkedin logo"
          className="absolute -bottom-24 transform -translate-x-1/2 left-1/2 -rotate-45"
        />
      </div>
    </>
  );
};
