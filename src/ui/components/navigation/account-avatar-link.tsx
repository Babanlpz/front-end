import { useAuth } from "@/context/AuthUserContext";
import { Typography } from "@/ui/design-systeme/typography/typography";
import Link from "next/link";
import { Avatar } from "../../design-systeme/avatar/avatar";

export const AccountAvatarNavigationLink = () => {
  const { authUser } = useAuth();

  const { displayName, photoURL } = authUser;

  return (
    <>
      <Link href="/mon-espace" className="flex items-center gap-2">
        <Avatar
          src={photoURL}
          alt={
            displayName ? `avatar de ${displayName}` : "Avatar de l'utilisateur"
          }
          size="large"
        />
        <div className="max-w-[160px]">
          <Typography variant="caption2" weight="medium" className="truncate">
            {displayName ? displayName : "Bienvenue"}
          </Typography>
          <Typography variant="caption4" weight="medium" theme="gray">
            Mon compte
          </Typography>
        </div>
      </Link>
    </>
  );
};
