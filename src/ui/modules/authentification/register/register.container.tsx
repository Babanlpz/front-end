import { RegisterView } from "./register.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormFieldsType } from "@/types/forms";

export const RegisterContainer = () => {
  const isLoading = false;

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    console.log(formData);
  };

  return (
    <>
      <RegisterView
        form={{
          handleSubmit,
          register,
          errors,
          control,
          onSubmit,
          isLoading,
        }}
      />
    </>
  );
};
