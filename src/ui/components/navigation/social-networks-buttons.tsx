import { Button } from "@/ui/design-systeme/button/button";
import clsx from "clsx";
import { RiFacebookBoxFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { footerSocialNetworksLinks } from "./app-links";

interface Props {
  className?: string;
}

export const SocialNetworksButtons = ({ className }: Props) => {
  const icoList = footerSocialNetworksLinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme="gray"
      icon={{
        icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxFill,
      }}
    />
  ));

  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {icoList}
    </div>
  );
};
