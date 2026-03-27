export function StatCard({ label, value, trend }: { label: string, value: string, trend: string }) {
  return (
    <div className="p-6 rounded-2xl border border-zinc-200 bg-white hover:shadow-zinc-800/5 hover:shadow-xl transition-all duration-300">
      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{label}</p>
      <div className="flex items-end justify-between mt-2">
        <h3 className="text-2xl font-bold text-zinc-900">{value}</h3>
        <span className="text-xs font-medium text-zinc-400 bg-zinc-50 px-2 py-1 rounded-md border border-zinc-100">
          {trend}
        </span>
      </div>
    </div>
  );
}