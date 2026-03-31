export function CircularLoader({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-5 w-5 stroke-[4px]",
    md: "h-8 w-8 stroke-[3px]",
    lg: "h-12 w-12 stroke-[2px]",
  };

  return (
    <div className="flex items-center justify-center p-4">
      <svg
        className={`animate-spin ${sizeClasses[size]} text-zinc-200 dark:text-zinc-400`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >

        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
        />
   
        <path
          className="opacity-100"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeDasharray="30, 150"
          d="M12 2a10 10 0 0 1 10 10"
          style={{
            color: "var(--tw-text-opacity)",
            stroke: "currentcolor",

            filter: "brightness(0.2) dark:brightness(5)",
          }}

          className="text-zinc-900 dark:text-zinc-100"
        />
      </svg>
    </div>
  );
}
