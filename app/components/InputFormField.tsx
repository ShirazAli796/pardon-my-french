import React from "react";

interface Props {
  label: string;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
  value?: string;
  onChange?: (value: string) => void; // Updated to pass string directly for easier use
  mode?: "light" | "dark"; // Added mode prop
  className?: string;
}

export default function InputFormField({
  label,
  placeholder,
  type,
  value,
  onChange,
  mode = "light", // Defaulting to light
}: Props) {
  const isDark = mode === "dark";

  return (
    <div className="w-full flex flex-col gap-1.5 mt-4">
      <label
        htmlFor="input-field"
        className={`text-sm font-medium ml-1 transition-colors duration-200 
          ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
      >
        {label || "Label"}
      </label>
      
      <input
        id="input-field"
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className={`w-full py-3 px-4 rounded-lg border outline-none transition-all duration-200
          
          /* Colors based on Mode */
          ${isDark 
            ? "bg-zinc-900 border-zinc-700 text-zinc-100 placeholder:text-zinc-600 hover:border-zinc-600 focus:border-zinc-500 focus:ring-white/5" 
            : "bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-400 hover:border-zinc-300 focus:border-zinc-500 focus:ring-zinc-800/5"
          }`}
      />
    </div>
  );
}