import React from "react";
import { Check } from "lucide-react";

interface Props {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
}

export default function Checkbox({
  label,
  checked,
  onChange,
  description,
}: Props) {
  return (
    <div
      className="flex items-start gap-3 mt-4 cursor-pointer group"
      onClick={() => onChange(!checked)}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={() => {}}
      />

      <div
        className={`
        mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200
        ${
          checked
            ? "bg-zinc-800 border-zinc-800 shadow-sm"
            : "bg-white border-zinc-300 group-hover:border-zinc-400"
        }
      `}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />}
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-zinc-800 cursor-pointer">
          {label}
        </label>
        {description && (
          <p className="text-xs text-zinc-500 leading-tight mt-0.5">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
