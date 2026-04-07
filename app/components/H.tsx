import React, { JSX } from 'react';

interface Props {
  level: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
  className?: string;
}

export default function H({ level, children, className = '' }: Props) {

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseStyles = "text-zinc-900 font-bold tracking-tight transition-colors duration-200";

  const levelStyles = {
    1: "text-4xl md:text-5xl font-extrabold tracking-tighter ",
    2: "text-3xl font-bold mb-1",
    3: "text-2xl font-bold mb-1",
    4: "text-xl font-semibold mb-1",
    5: "text-lg font-semibold mb-1 text-zinc-800",
  };

  return (
    <Tag className={`${baseStyles} ${levelStyles[level]} ${className}`}>
      {children}
    </Tag>
  );
}