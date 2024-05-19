import { ForgetPasswordFormFieldsType } from "@/types/forms";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordView } from "./forget-password.view";

export const ForgetPasswordContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    reset,
  } = useForm<ForgetPasswordFormFieldsType>();

  const onSubmit: SubmitHandler<ForgetPasswordFormFieldsType> = async (
    formData
  ) => {
    setIsLoading(true);
    console.log(formData);
  };

  return (
    <>
      <ForgetPasswordView
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
