import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "white";
}

export const Spinner = ({ size = "medium", variant = "primary" }: Props) => {
  let variantStyles: string, sizeStyles: string;

  switch (size) {
    case "small":
      sizeStyles = "w-5 h-5";
      break;
    case "medium": // Default
      sizeStyles = "w-9 h-9";
      break;
    case "large":
      sizeStyles = "w-12 h-12";
      break;
  }

  switch (variant) {
    case "primary": // Default
      variantStyles = "text-primary";
      break;
    case "white":
      variantStyles = "text-white";
      break;
  }

  return (
    <>
      <svg
        className={clsx(sizeStyles, variantStyles, "animate-spin")}
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          // d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill="currentColor"
          className="opacity-75"
        ></path>
      </svg>
    </>
  );
};
