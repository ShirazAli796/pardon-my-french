import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react"; // Optional: icon for the arrow

interface Option {
  label: string;
  value: string;
}

interface Props {
  label: string;
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

export default function Dropdown({
  label,
  options,
  onSelect,
  placeholder,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  // 1. Create a ref for the dropdown container
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 2. Add the "click outside" logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option: Option) => {
    setSelected(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="w-full flex flex-col gap-1.5 mt-4 relative"
    >
      <label className="text-sm font-medium text-zinc-600 ml-1">
        {label || "Select Option"}
      </label>

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`w-full py-3 px-4 rounded-lg border flex justify-between items-center transition-all duration-200 outline-none
          ${isOpen ? "border-zinc-800 ring-4 ring-zinc-800/5" : "border-zinc-200 hover:border-zinc-300"}
          bg-white text-zinc-900 text-left`}
      >
        <span className={!selected ? "text-zinc-400" : ""}>
          {selected ? selected.label : placeholder || "Select..."}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-zinc-200 rounded-lg shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-1">
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className="px-4 py-2.5 text-zinc-700 hover:bg-zinc-50 cursor-pointer transition-colors text-sm flex items-center justify-between"
              >
                {option.label}
                {selected?.value === option.value && (
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
