import { Button } from "../../design-systeme/button/button";
import { Logo } from "../../design-systeme/logo/logo";
import { Typography } from "../../design-systeme/typography/typography";
import { Container } from "../container/container";
import { ActiveLink } from "../navigation/active-link";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <>
      <div className="border-b-2 border-gray-400">
        <Container className="flex items-center justify-between py-1.5 gap-7">
          <ActiveLink href="/">
            <div className="flex items-center gap-2.5">
              <Logo size="small" />
              <div className="flex flex-col">
                <div className="text-gray font-extrabold text-[24px]">
                  Coders Baban
                </div>
                <Typography variant="caption4" theme="gray" component="span">
                  Trouve de l'inspiration & reçois des feedbacks !
                </Typography>
              </div>
            </div>
          </ActiveLink>

          <div className="flex items-center gap-7">
            <Typography
              variant="caption3"
              component="div"
              className="flex items-center gap-7"
            >
              <ActiveLink href="/design-systeme">Design systeme</ActiveLink>
              <ActiveLink href="/projets">Projets</ActiveLink>
              <ActiveLink href="/formations">Formations</ActiveLink>
              <ActiveLink href="/contact">Contact</ActiveLink>
            </Typography>
            <div className="flex items-center gap-2">
              <Button baseUrl="/connexion" size="small">
                Connexion
              </Button>
              <Button
                baseUrl="/connexion/inscription"
                size="small"
                variant="secondary"
              >
                Rejoindre
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
