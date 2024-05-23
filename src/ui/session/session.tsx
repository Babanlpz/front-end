import { useAuth } from "@/context/AuthUserContext";
import { ScreenSpinner } from "../design-systeme/spinner/screen-spinner";

interface Props {
  children: React.ReactNode;
}

export const Session = ({ children }: Props) => {
  const { authUserIsLoading, authUser } = useAuth();

  if (!authUserIsLoading) {
    return <>{children}</>;
  }

  return <ScreenSpinner />;
};
