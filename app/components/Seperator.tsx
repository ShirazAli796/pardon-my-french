import React from "react";

interface Props {
  text?: string;
}

export default function Separator({ text }: Props) {
  return (
    <div className="relative w-full flex items-center py-6">
      {/* The Line */}
      <div className="flex-grow border-t border-zinc-200"></div>

      {text && (
        <span className="flex-shrink mx-4 text-xs font-semibold text-zinc-400 uppercase tracking-widest bg-white">
          {text}
        </span>
      )}

      <div className="flex-grow border-t border-zinc-200"></div>
    </div>
  );
}
