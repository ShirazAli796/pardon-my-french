import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  label: string;
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
  mode?: "light" | "dark"; // Added mode prop
   defaultValue?: string; // <-- new prop
}

export default function Dropdown({
  label,
  options,
  onSelect,
  placeholder,
    defaultValue,
  mode = "light", // Default to light
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (defaultValue) {
    const found = options.find((opt) => opt.value === defaultValue);
    if (found) {
      setSelected(found);
    }
  }
}, [defaultValue, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSelect = (option: Option) => {
    setSelected(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  // Theme Mapping
  const isDark = mode === "dark";

  return (
    <div ref={dropdownRef} className="w-full flex flex-col gap-1.5 mt-4 relative">
      {/* Label Color */}
      <label className={`text-sm font-medium ml-1 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
        {label || "Select Option"}
      </label>

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`w-full py-3 px-4 rounded-lg border flex justify-between items-center transition-all duration-200 outline-none
          ${isOpen 
            ? (isDark ? "border-zinc-500 ring-4 ring-white/5" : "border-zinc-800 ring-4 ring-zinc-800/5") 
            : (isDark ? "border-zinc-700 hover:border-zinc-600" : "border-zinc-200 hover:border-zinc-300")
          }
          ${isDark ? "bg-zinc-900 text-zinc-100" : "bg-white text-zinc-900"}`}
      >
        <span className={!selected ? (isDark ? "text-zinc-500" : "text-zinc-400") : ""}>
          {selected ? selected.label : placeholder || "Select..."}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 
            ${isDark ? "text-zinc-400" : "text-zinc-500"} 
            ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute top-full left-0 w-full mt-2 rounded-lg shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-1 border
          ${isDark ? "bg-zinc-900 border-zinc-700" : "bg-white border-zinc-200"}`}>
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`px-4 py-2.5 cursor-pointer transition-colors text-sm flex items-center justify-between
                  ${isDark 
                    ? "text-zinc-300 hover:bg-zinc-800" 
                    : "text-zinc-700 hover:bg-zinc-50"}`}
              >
                {option.label}
                {selected?.value === option.value && (
                  <div className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-zinc-100" : "bg-zinc-800"}`} />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}