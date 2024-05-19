// Code: Form input component

import clsx from "clsx";

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
  errorMessage = "Ce champ est obligatoire",
  id,
  required = true,
  isAutocompleted = false,
}: Props) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          "w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600"
        )}
        disabled={isLoading}
        {...register(id, {
          required: {
            value: required,
            message: errorMessage,
          },
        })}
        autoComplete={isAutocompleted ? "on" : "off"}
      />
    </>
  );
};
