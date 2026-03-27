import React from 'react';

interface Props {
  label: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({ label, placeholder, rows = 4, value, onChange }: Props) {
  return (
    <div className="w-full flex flex-col gap-1.5 mt-4">
      <label 
        className="text-sm font-medium text-zinc-600 ml-1"
      >
        {label}
      </label>
      <textarea
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full py-3 px-4 rounded-lg border border-zinc-200 bg-white text-zinc-900 
                   placeholder:text-zinc-400 outline-none transition-all duration-200 
                   hover:border-zinc-300
                   focus:border-zinc-800 focus:ring-4 focus:ring-zinc-800/5
                   resize-y min-h-25"
      />
    </div>
  );
}