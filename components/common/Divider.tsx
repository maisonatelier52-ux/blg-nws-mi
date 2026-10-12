import React from "react";

interface DividerProps {
  variant?: "thin" | "double" | "thick" | "vertical";
  className?: string;
}

export function Divider({ variant = "thin", className = "" }: DividerProps) {
  if (variant === "double") {
    return (
      <div
        className={`w-full my-6 border-t-[3px] border-b border-t-neutral-900 border-b-neutral-900 h-[5px] ${className}`}
        role="separator"
      />
    );
  }

  if (variant === "thick") {
    return (
      <hr
        className={`w-full my-6 border-t-2 border-neutral-900 ${className}`}
      />
    );
  }

  if (variant === "vertical") {
    return (
      <div
        className={`hidden lg:block w-[1px] bg-neutral-200 self-stretch ${className}`}
        role="separator"
      />
    );
  }

  return (
    <hr
      className={`w-full my-4 border-t border-neutral-200 ${className}`}
    />
  );
}
