export function Toast({ message, type = "SUCCESS" }: { message: string, type?: "SUCCESS" | "ERROR" }) {
  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-zinc-200 p-4 rounded-xl shadow-2xl animate-in slide-in-from-right-10">
      <div className={`w-2 h-2 rounded-full ${type === "SUCCESS" ? 'bg-zinc-800' : 'bg-red-500'}`} />
      <p className="text-sm font-medium text-zinc-900">{message}</p>
    </div>
  );
}