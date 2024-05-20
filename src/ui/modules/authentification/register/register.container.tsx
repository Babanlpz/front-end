import { firebaseCreateUser } from "@/api/authentication";
import { useToggle } from "@/hooks/use-toggle";
import { RegisterFormFieldsType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RegisterView } from "./register.view";

export const RegisterContainer = () => {
  const { value: isLoading, setValue: setIsLoading, toggle } = useToggle();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  const handleCreateUserAuthentication = async ({
    email,
    password,
    how_did_hear,
  }: RegisterFormFieldsType) => {
    const { error, data } = await firebaseCreateUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    // @ todo create user document in firestore
    toast.success("Compte créé avec succès !");
    setIsLoading(false);
    reset();
  };

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;

    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit contenir au moins 6 caractères.",
      });
      setIsLoading(false);
      return;
    }
    handleCreateUserAuthentication(formData);
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
