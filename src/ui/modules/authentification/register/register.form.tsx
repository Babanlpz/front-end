import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-systeme/button/button";

interface Props {
  form: FormsType;
}

export const RegisterForm = ({ form }: Props) => {
  const { handleSubmit, register, errors, control, onSubmit, isLoading } = form;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button isLoading={isLoading} type="submit" fullWith>
          S'inscrire
        </Button>
      </form>
    </>
  );
};
