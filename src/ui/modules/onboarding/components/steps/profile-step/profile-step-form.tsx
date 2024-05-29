import { FormsType } from "@/types/forms";
import { Input } from "@/ui/design-systeme/forms/input";
import { Textarea } from "@/ui/design-systeme/forms/textarea";

interface Props {
  form: FormsType;
}

export const ProfileStepForm = ({ form }: Props) => {
  const { errors, register, isLoading } = form;
  return (
    <>
      <form className="w-full max-w-md space-y-4">
        <Input
          label="Nom d'utilisateur"
          isLoading={isLoading}
          placeholder="john doe"
          type="text"
          register={register}
          errors={errors}
          errorMessage="Tu dois renseigner un pseudo"
          id="displayName"
        />
        <Input
          label="Spécialité"
          isLoading={isLoading}
          placeholder="Développeur front-end React freelance"
          type="text"
          register={register}
          errors={errors}
          errorMessage="Tu dois renseigner ton expertise"
          id="expertise"
        />
        <Textarea
          label="Biographie"
          isLoading={isLoading}
          placeholder="Indique nous en quelques mots qui tu es et ce que tu fais..."
          rows={5}
          register={register}
          errors={errors}
          errorMessage="Tu dois renseigner ce champ"
          id="biography"
          required={false}
        />
      </form>
    </>
  );
};
