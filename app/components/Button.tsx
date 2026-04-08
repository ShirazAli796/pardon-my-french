import React from "react";

interface Props {
  variant: "PRIMARY" | "SECONDARY";
  value: string;
  onClick: () => void;
  fullWidth?: "full" | "half" | "default";
}

export default function Button({ variant, value, onClick, fullWidth }: Props) {
  const isPrimary = variant === "PRIMARY";
  const widthStyle = {
    full: "w-full",
    half: "w-1/2",
    default: "",
  };

  const baseStyles =
    "inline-flex py-3 px-6 rounded-lg transition-all duration-200 justify-center items-center active:scale-95 cursor-pointer";
  const widthStyles = widthStyle[fullWidth!];
  const variantStyles = isPrimary
    ? "bg-zinc-800 text-white hover:bg-zinc-900 shadow-md hover:shadow-lg border-transparent"
    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-300";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${widthStyles}`}
    >
      {value}
    </button>
  );
}
