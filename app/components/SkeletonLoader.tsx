export function SkeletonLoader() {
  return (
    <div className="w-full space-y-4 animate-pulse">
      <div className="h-4 w-1/4 bg-zinc-200 rounded-md" />
      <div className="h-12 w-full bg-zinc-100 rounded-lg" />
    </div>
  );
}