import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Props {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function ZincAccordionItem({ title, children, defaultOpen = false }: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`
      w-full overflow-hidden transition-all duration-300 border mb-3 rounded-xl
      ${isOpen ? 'border-zinc-800 ring-4 ring-zinc-800/5' : 'border-zinc-300 hover:border-zinc-400'}
    `}>
      {/* Accordion Header */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between py-4 px-5 text-left transition-colors
          ${isOpen ? 'bg-zinc-50/50' : 'bg-white'}
        `}
      >
        <span className={`
          font-bold tracking-tight transition-colors
          ${isOpen ? 'text-zinc-900' : 'text-zinc-600'}
        `}>
          {title}
        </span>
        
        <div className={`
          w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center bg-white shadow-sm transition-transform duration-300
          ${isOpen ? 'rotate-180 border-zinc-800' : 'rotate-0'}
        `}>
          <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-zinc-900' : 'text-zinc-400'}`} />
        </div>
      </button>

      {/* Accordion Content */}
      <div className={`
        overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="p-5 pt-0 border-t border-zinc-100 text-sm text-zinc-600 leading-relaxed bg-white">
          <div className="pt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}