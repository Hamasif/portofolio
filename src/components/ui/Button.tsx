import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300",

        variant === "primary"
          ? "bg-[#00F5C3] text-black hover:scale-105 hover:shadow-[0_0_40px_rgba(0,245,195,.4)]"

          : "border border-zinc-700 bg-zinc-900 text-white hover:border-[#00F5C3]"
      )}
    >
      {children}
    </button>
  );
};

export default Button;