import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium uppercase tracking-wider text-xs transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-neutral-900 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-[11px]",
    md: "px-4 py-2 text-xs",
    lg: "px-6 py-3 text-sm",
  };

  const variantStyles = {
    primary:
      "bg-neutral-900 text-neutral-50 hover:bg-neutral-800 border border-neutral-900",
    secondary:
      "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-200",
    outline:
      "bg-transparent text-neutral-900 border border-neutral-900 hover:bg-neutral-900 hover:text-white",
    ghost:
      "bg-transparent text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/80 border border-transparent",
    accent:
      "bg-[#9B1B1B] text-white hover:bg-[#801414] border border-[#9B1B1B]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
