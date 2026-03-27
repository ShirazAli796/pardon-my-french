import React from "react";

interface Props {
  label: string;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputFormField({
  label,
  placeholder,
  type,
  value,
  onChange,
}: Props) {
  return (
    <div className="w-full flex flex-col gap-1.5 mt-4">
      <label
        htmlFor="input-field"
        className="text-sm font-medium text-zinc-600 ml-1"
      >
        {label || "Label"}
      </label>
      <input
        id="input-field"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full py-3 px-4 rounded-lg border border-zinc-200 bg-white text-zinc-900 
                   placeholder:text-zinc-400 outline-none transition-all duration-200 
                   hover:border-zinc-300
                   focus:border-zinc-500 focus:ring-4 focus:ring-zinc-800/5"
      />
    </div>
  );
}
