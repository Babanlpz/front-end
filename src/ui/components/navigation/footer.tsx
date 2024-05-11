import { Typography } from "@/ui/design-systeme/typography/typography";
import Image from "next/image";
import { Container } from "../container/container";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = (
    <div>
      <ul>
        <li>Test A</li>
        <li>Test B</li>
        <li>Test C</li>
      </ul>
    </div>
  );

  return (
    <>
      <div className=" bg-gray">
        <Container className="flex justify-between pt-16">
          <div className="flex flex-col items-center gap-1">
            <Typography variant="caption1" theme="white" weight="medium">
              Mon linkedin
            </Typography>
            <Typography variant="caption3" theme="gray" className="pb-3">
              Viens te connecter avec moi
            </Typography>
            <a
              href="https://www.linkedin.com/in/estebanlopezdev/"
              target="_blank"
            >
              <Image
                src="/assets/svg/linkedin.svg"
                width={229}
                height={216}
                alt="Linkedin | Coders Baban"
              />
            </a>
          </div>
          <div className="">{footerNavigationList}</div>
        </Container>
        <Container className="pt-9 pb-11 space-y-11">
          <hr className="text-gray-800" />
          <div className="flex items-center justify-between">
            <Typography variant="caption4" theme="gray">
              {`Copyright © ${currentYear} Coders Baban | Propulsed by `}
              <a
                href="https://portfoliobaban.vercel.app/"
                target="_blank"
                className="underline"
              >
                Esteban Lopez
              </a>
              {` - Remote baban SASUS `}
            </Typography>
            <div className=""></div>
          </div>
        </Container>
      </div>
    </>
  );
};
