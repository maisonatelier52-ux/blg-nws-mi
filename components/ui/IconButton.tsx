import React from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
  className?: string;
  children: React.ReactNode;
}

export function IconButton({
  "aria-label": ariaLabel,
  className = "",
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      className={`p-1.5 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-neutral-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
