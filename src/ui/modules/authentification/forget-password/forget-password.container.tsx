import { sendEmailToResetPassword } from "@/api/authentication";
import { useToggle } from "@/hooks/use-toggle";
import { ForgetPasswordFormFieldsType } from "@/types/forms";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ForgetPasswordView } from "./forget-password.view";

export const ForgetPasswordContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading, toggle } = useToggle();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    reset,
  } = useForm<ForgetPasswordFormFieldsType>();

  const handleResterPassword = async ({
    email,
  }: ForgetPasswordFormFieldsType) => {
    const { error } = await sendEmailToResetPassword(email);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success(
      `Un email de réinitialisation a été envoyé à l'adresse: ${email}`
    );
    setIsLoading(false);
    reset();
    router.push("/connexion");
  };

  const onSubmit: SubmitHandler<ForgetPasswordFormFieldsType> = async (
    formData
  ) => {
    setIsLoading(true);
    handleResterPassword(formData);
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
