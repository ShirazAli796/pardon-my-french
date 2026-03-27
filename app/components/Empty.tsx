import { Database } from 'lucide-react';

export function EmptyState({ title, message, onAction }: any) {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center text-center border-2 border-dashed border-zinc-100 rounded-2xl bg-zinc-50/30">
      <div className="w-16 h-16 rounded-full bg-white border border-zinc-100 flex items-center justify-center mb-4 shadow-sm">
        <Database className="w-8 h-8 text-zinc-300" />
      </div>
      <h3 className="text-lg font-bold text-zinc-900">{title || "No data found"}</h3>
      <p className="text-sm text-zinc-500 max-w-xs mt-1 mb-6">
        {message || "It looks like you haven't added anything yet. Get started by clicking the button below."}
      </p>
      <button 
        onClick={onAction}
        className="px-6 py-2.5 rounded-lg bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-900 transition-all active:scale-95"
      >
        Add New Entry
      </button>
    </div>
  );
}