import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-systeme/button/button";
import { Input } from "@/ui/design-systeme/forms/input";

interface Props {
  form: FormsType;
}

export const RegisterForm = ({ form }: Props) => {
  const { handleSubmit, register, errors, isLoading, onSubmit } = form;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
        <Input
          isLoading={isLoading}
          placeholder="johndoe@gmail.com"
          type="email"
          register={register}
          errors={errors}
          errorMessage="Ce champ est obligatoire"
          id="email"
        />
        <Input
          isLoading={isLoading}
          placeholder="Mot de passe"
          type="password"
          register={register}
          errors={errors}
          errorMessage="Ce champ est obligatoire"
          id="password"
        />
        <Input
          isLoading={isLoading}
          placeholder="Comment avez-vous entendu parler de nous ?"
          register={register}
          errors={errors}
          errorMessage="Ce champ est obligatoire"
          id="how_did_hear"
        />
        <Button isLoading={isLoading} type="submit" fullWith>
          S'inscrire
        </Button>
      </form>
    </>
  );
};
