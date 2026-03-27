import React, { useRef } from 'react';
import { Calendar } from 'lucide-react';

interface Props {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: string;
  max?: string;
}

export default function DatePicker({ label, value, onChange, min, max }: Props) {

    
  return (
    <div className="w-full flex flex-col gap-1.5 mt-4">
      <label 
        className="text-sm font-medium text-zinc-600 ml-1"
      >
        {label}
      </label>
      
      <div className="relative group">
        {/* Icon Overlay */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200 group-focus-within:text-zinc-800 text-zinc-400">
          <Calendar className="w-4 h-4" />
        </div>

        <input
          type="date"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          className="w-full py-3 pl-11 pr-4 rounded-lg border border-zinc-200 bg-white text-zinc-900 
                   placeholder:text-zinc-400 outline-none transition-all duration-200 
                   hover:border-zinc-300
                   focus:border-zinc-800 focus:ring-4 focus:ring-zinc-800/5
                   appearance-none"
          style={{
            // This ensures the native picker icon (if browser supports it) doesn't overlap our icon
            colorScheme: 'light' 
          }}
        />
      </div>
    </div>
  );
}