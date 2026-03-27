export function Tooltip({ text, children }: { text: string, children: React.ReactNode }) {
  return (
    <div className="group relative inline-block">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-zinc-900 text-white text-[10px] font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-zinc-900" />
      </div>
    </div>
  );
}