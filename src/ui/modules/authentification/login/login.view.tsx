import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-systeme/box/box";
import { Typography } from "@/ui/design-systeme/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "./login.form";

export const LoginView = () => {
  return (
    <>
      <Container className="grid grid-cols-2 gap-20 mb-32">
        <div className="flex items-center">
          <div className="relative w-full h-[531px] ">
            <Image
              fill
              src="/assets/images/login.jpg"
              alt="Description de l'lilustration..."
              className="object-scale-down"
            />
          </div>
        </div>
        <div className="flex items-center">
          <Box padding_y="py-5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" component="h1">
                Connexion
              </Typography>
              <div className="flex items-center gap-2">
                <Typography variant="caption4" component="span" theme="gray">
                  Tu n'as pas de compte ?
                </Typography>
                <Typography variant="caption4" component="span" theme="primary">
                  <Link href="./connexion/inscription">S'inscrire</Link>
                </Typography>
              </div>
            </div>
            <LoginForm />
          </Box>
        </div>
      </Container>
    </>
  );
};
