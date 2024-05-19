import { RegisterFormFieldsType } from "@/types/forms";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { set } from "firebase/database";

export const RegisterContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setIsLoading(true);
    console.log(formData);
  };

  return (
    <>
      <RegisterView
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
