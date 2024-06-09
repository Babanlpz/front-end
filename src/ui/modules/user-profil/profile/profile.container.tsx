import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { UserProfileFormFieldsType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProfileView } from "./profile.view";

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
  } = useForm<UserProfileFormFieldsType>();

  const handleUpdateUserDocument = async (
    formData: UserProfileFormFieldsType
  ) => {
    setLoading(true);
  };

  const onSubmit: SubmitHandler<UserProfileFormFieldsType> = async (
    fromData
  ) => {
    handleUpdateUserDocument(fromData);
    return;
  };

  return (
    <>
      <ProfileView
        form={{
          errors,
          control,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
        }}
      />
    </>
  );
};
