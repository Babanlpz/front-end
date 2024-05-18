import { register } from "module";

interface Props {
  isLoading: boolean;
  placeholder: string;
  type?: "text" | "email" | "password";
  register: any;
  errors: any;
  errorMessage?: string;
  id: string;
  required?: boolean;
  isAutocompleted?: boolean;
}

export const Input = ({
  isLoading,
  placeholder,
  type = "text",
  register,
  errors,
  errorMessage,
  id,
  required = false,
  isAutocompleted = false,
}: Props) => {
  return (
    <>
      <input
        type="email"
        placeholder="johndoe@gmail.com"
        className=""
        disabled={isLoading}
        {...register("email", {
          required: {
            value: true,
            message: "Ce champ est obligatoire",
          },
        })}
        autoComplete="off"
      />
    </>
  );
};
