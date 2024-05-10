import { Typography } from "@/ui/design-systeme/typography/typography";
import Link from "next/link";
import { Button } from "../../design-systeme/button/button";
import { Logo } from "../../design-systeme/logo/logo";
import { Container } from "../container/container";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <>
      <div className="border-b-2 border-gray-400">
        <Container className="flex items-center justify-between py-1.5 gap-7">
          <Link href="/">
            <div className="flex items-center gap-2.5">
              <Logo size="small" />
              <div className="flex flex-col">
                <div className="text-gray font-extrabold text-[24px]">
                  Coders Baban
                </div>
                <Typography variant="caption4" component="span" theme="gray">
                  Trouve de l'inspiration & reçois des feedbacks !
                </Typography>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-7">
            <Typography
              variant="caption3"
              component="div"
              className="flex items-center gap-7"
            >
              <Link href="/design-systeme">Design systeme</Link>
              <Link href="/projets">Projets</Link>
              <Link href="/formations">Formations</Link>
              <Link href="/contact">Contact</Link>
            </Typography>
            <div className="flex items-center gap-2">
              <Button size="small">Connexion</Button>
              <Button size="small" variant="secondary">
                Rejoindre
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};