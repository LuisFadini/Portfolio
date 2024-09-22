import { ClassNameValue, twMerge } from "tailwind-merge";

export type ButtonVariants = "outline" | "primary";

export interface ButtonProps {
  variant: ButtonVariants;
  children: React.ReactNode;
  className?: ClassNameValue;
}

export function Button(props: ButtonProps) {
  const defaultClassNames =
    "inline-flex items-center justify-center text-lg font-medium transition-colors focus-visible:outline-none rounded-lg shadow-md duration-300";

  const variantClassName: Record<ButtonVariants, string> = {
    outline:
      "border border-background-700 text-text-100 p-3 bg-transparent hover:border-accent-600 hover:bg-accent-600 hover:text-text-100",
    primary:
      "text-text-100 bg-primary-500 p-3 border border-background-700 hover:bg-primary-700 hover:text-text-100",
  };

  return (
    <button
      className={twMerge(
        defaultClassNames,
        variantClassName[props.variant],
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
