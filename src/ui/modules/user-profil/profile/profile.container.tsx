import { useAuth } from "@/context/AuthUserContext";
import { ProfileView } from "./profile.view";
import { useToggle } from "@/hooks/use-toggle";
import { useForm } from "react-hook-form";

export const ProfileContainer = () => {
  const { authUser } = useAuth();
  const { value: isLoading, setValue: setLoading } = useToggle();

  const {
    handleSubmit, 
    control,
    formState: { errors },
    register,
    setValue,
    setError,
  } = useForm();

  return (
    <>
      <ProfileView />
    </>
  );
};
