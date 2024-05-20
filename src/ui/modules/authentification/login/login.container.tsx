import { firebaseSignInUser } from "@/api/authentication";
import { auth } from "@/config/firebase-config";
import { useToggle } from "@/hooks/use-toggle";
import { LoginFormFieldsType } from "@/types/forms";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LoginView } from "./login.view";

export const LoginContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading, toggle } = useToggle();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("user", user);
        // ...
      } else {
        console.log("Tu n'es pas connecté");
        // User is signed out
        // ...
      }
    });
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    reset,
  } = useForm<LoginFormFieldsType>();

  const handleSignInUser = async ({ email, password }: LoginFormFieldsType) => {
    const { error } = await firebaseSignInUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Connexion réussie sur Coders Baban");
    setIsLoading(false);
    reset();
    // router.push("/mon-espace");
  };

  const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
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
    handleSignInUser(formData);
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
