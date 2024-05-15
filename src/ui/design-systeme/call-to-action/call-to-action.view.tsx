import { LinkTypes } from "@/lib/link-type";
import { Container } from "@/ui/components/container/container";
import Image from "next/image";
import { Button } from "../button/button";
import { Typography } from "../typography/typography";

export const CallToActionView = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-primary">
        <Container className="py-20">
          <div className="relative z-10 max-w-3xl space-y-5">
            <Typography variant="h2" theme="white" component="h2">
              N'attend pas pour développer tes compétences...
            </Typography>
            <div>
              <Button
                variant="success"
                baseUrl="/#"
                linkType={LinkTypes.EXTERNAL}
              >
                Formations React.js gratuite
              </Button>
            </div>
          </div>
          <div>
            <Image
              width={1410}
              height={1410}
              src="./assets/svg/bombers.svg"
              alt="illustration d'une bombe 3d"
              className="absolute -bottom-[540px] -right-[250px]"
            />
          </div>
        </Container>
      </div>
    </>
  );
};
