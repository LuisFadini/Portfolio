import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";

interface BorderedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export function BorderedContainer({
  asChild,
  ...props
}: BorderedContainerProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={twMerge(
        "border border-background-700 p-4 rounded-lg",
        props.className
      )}
      {...props}
    >
      {props.children}
    </Comp>
  );
}
