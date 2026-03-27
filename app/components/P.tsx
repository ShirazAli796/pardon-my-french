import React from 'react';

interface Props {
  children: React.ReactNode;
  variant?: 'DEFAULT' | 'MUTED' | 'SMALL' | 'BOLD';
  className?: string;
}

export default function P({ children, variant = 'DEFAULT', className = '' }: Props) {
  // Logic for different text "feelings"
  const variantStyles = {
    DEFAULT: "text-base text-zinc-700 leading-relaxed",
    MUTED: "text-sm text-zinc-500 leading-snug",
    SMALL: "text-xs text-zinc-400 font-medium tracking-wide",
    BOLD: "text-base text-zinc-900 font-semibold leading-relaxed",
  };

  return (
    <p className={`${variantStyles[variant]} ${className}`}>
      {children}
    </p>
  );
}