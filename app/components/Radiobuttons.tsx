import React from 'react';

interface RadioOption {
  label: string;
  value: string;
  description?: string;
}

interface Props {
  label: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export default function RadioGroup({ label, options, selectedValue, onChange }: Props) {
  return (
    <div className="w-full flex flex-col gap-3 mt-6">
      <label className="text-sm font-medium text-zinc-600 ml-1 mb-1">
        {label}
      </label>
      
      <div className="flex flex-col gap-3">
        {options.map((option) => {
          const isSelected = selectedValue === option.value;
          
          return (
            <div 
              key={option.value}
              onClick={() => onChange(option.value)}
              className={`
                group flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-200
                ${isSelected 
                  ? 'border-zinc-800 bg-zinc-50/50 ring-4 ring-zinc-800/5' 
                  : 'border-zinc-200 hover:border-zinc-300 bg-white'}
              `}
            >
              {/* Custom Radio Circle */}
              <div className={`
                mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200
                ${isSelected 
                  ? 'border-zinc-800 bg-white' 
                  : 'border-zinc-300 bg-white group-hover:border-zinc-400'}
              `}>
                {isSelected && (
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 animate-in zoom-in-75 duration-200" />
                )}
              </div>

              {/* Label & Description */}
              <div className="flex flex-col">
                <span className={`text-sm font-medium transition-colors ${isSelected ? 'text-zinc-900' : 'text-zinc-700'}`}>
                  {option.label}
                </span>
                {option.description && (
                  <p className="text-xs text-zinc-500 leading-tight mt-1">
                    {option.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}