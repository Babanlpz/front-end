import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-systeme/box/box";
import Image from "next/image";

export const RegisterView = () => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="">
        <div className="relative w-full h-[531px] ">
          <Image
            fill
            src="/assets/images/register.jpg"
            alt="Description de l'lilustration..."
            className="object-scale-down"
          />
        </div>
      </div>
      <div className=" flex items-center">
        <Box padding_y="py-5"> du contenu</Box>
      </div>
    </Container>
  );
};
