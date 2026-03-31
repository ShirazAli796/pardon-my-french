import React from "react";

interface Props {
  children: React.ReactNode;
  variant?: "DEFAULT" | "MUTED" | "SMALL" | "BOLD" | "CUSTOM";
  className?: string;
}

export default function P({
  children,
  variant = "DEFAULT",
  className = "",
}: Props) {

  const variantStyles = {
    
    DEFAULT: "text-base text-zinc-700 leading-relaxed",
    MUTED: "text-sm text-zinc-500 leading-snug",
    SMALL: "text-xs text-zinc-400 font-medium tracking-wide",
    BOLD: "text-base text-zinc-900 font-semibold leading-relaxed",
    CUSTOM : ""
  };

  return (
    <p className={` ${className} ${variantStyles[variant]} `}>{children}</p>
  );
}
