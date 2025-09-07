import { type ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
}

const variantStyles = {
  primary: "bg-orange-500 text-white hover:bg-green-700 cursor-pointer",
  secondary: "bg-blue-300 text-white hover:bg-blue-400",
};

const sizeStyles = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-6 text-lg",
};

export const Button = ({
  variant = "primary",
  size = "md",
  startIcon,
  endIcon,
  children,
  onClick,
  fullWidth,
}: ButtonProps) => {
  const classes = clsx(
    "rounded-md flex items-center justify-center font-medium transition",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full"
  );

  return (
    <button onClick={onClick} className={classes}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};
