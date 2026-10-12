import React from "react";
import Link from "next/link";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "investigation" | "outline" | "breaking";
  size?: "sm" | "md";
  href?: string;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  href,
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-bold uppercase tracking-widest transition-colors duration-150";

  const sizeStyles = {
    sm: "text-[10px] py-0.5",
    md: "text-xs py-1",
  };

  const variantStyles = {
    default: "text-[#9B1B1B] hover:text-[#7A1515]",
    accent: "bg-[#9B1B1B] text-white px-1.5 py-0.5 text-[10px]",
    investigation:
      "bg-neutral-900 text-white px-2 py-0.5 text-[10px] tracking-widest font-semibold border-l-2 border-[#9B1B1B]",
    outline:
      "border border-neutral-300 text-neutral-800 px-1.5 py-0.5 text-[10px]",
    breaking:
      "bg-[#9B1B1B] text-white px-2 py-0.5 text-[10px] font-black tracking-widest animate-pulse",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return <span className={combinedClasses}>{children}</span>;
}
