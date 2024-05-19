import { LoginFormFieldsType } from "@/types/forms";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";

export const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    reset,
  } = useForm<LoginFormFieldsType>();

  const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
    setIsLoading(true);
    console.log(formData);
  };

  return (
    <>
      <LoginView
        form={{
          handleSubmit,
          register,
          errors,
          onSubmit,
          isLoading,
        }}
      />
    </>
  );
};
