import React, { JSX } from 'react';

interface Props {
  level: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
  className?: string;
}

export default function H({ level, children, className = '' }: Props) {
  // We use a mapping to ensure semantic HTML tags (h1, h2, etc.)
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  // Modern UI usually has tighter tracking (letter-spacing) for larger text
  const baseStyles = "text-zinc-900 font-bold tracking-tight transition-colors duration-200";

  const levelStyles = {
    1: "text-4xl md:text-5xl font-extrabold tracking-tighter ",
    2: "text-3xl font-bold mb-4",
    3: "text-2xl font-bold mb-3",
    4: "text-xl font-semibold mb-2",
    5: "text-lg font-semibold mb-2 text-zinc-800",
  };

  return (
    <Tag className={`${baseStyles} ${levelStyles[level]} ${className}`}>
      {children}
    </Tag>
  );
}