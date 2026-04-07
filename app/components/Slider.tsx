import React, { useState, useRef, useEffect } from "react";

interface CustomSliderProps {
  label: string;
  min?: number;
  max?: number;
  value: number;
  onChange: (value: number) => void;
  mode?: "light" | "dark";
  margin?: string;
}

export default function CustomVibrantSlider({
  label,
  min = 0,
  max = 100,
  value,
  onChange,
  mode = "dark",
  margin = "mt-6",
}: CustomSliderProps) {
  const isDark = mode === "dark";
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Calculate percentage for the vibrant visuals
  const percentage = Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.min(Math.max(x / rect.width, 0), 1) * (max - min) + min;
    onChange(Math.round(pos));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    (e.target as Element).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onPointerUp = () => setIsDragging(false);

  return (
    <div className={`w-full select-none ${margin}`}>
      {/* Header Area */}
      <div className="flex justify-between items-center mb-4 px-1">
        <label className={`text-[10px] font-black uppercase tracking-[0.2em] 
          ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
          {label}
        </label>
        <div className={`px-2.5 py-1 rounded-md text-xs font-bold font-mono transition-all duration-300
          ${isDark 
            ? "bg-zinc-900 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)]" 
            : "bg-zinc-100 text-zinc-900 border border-zinc-200"}`}>
          {value.toString().padStart(2, '0')}
        </div>
      </div>

      {/* Slider Track */}
      <div 
        ref={sliderRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        className="relative h-3 w-full flex items-center cursor-crosshair"
      >
        {/* Background Track */}
        <div className={`absolute w-full h-[6px] rounded-full overflow-hidden
          ${isDark ? "bg-zinc-900" : "bg-zinc-200"}`}>
          
          {/* Vibrant Progress Fill */}
          <div 
            className={`h-full transition-all duration-75 ease-out rounded-full
              ${isDark 
                ? "bg-gradient-to-right from-indigo-600 via-cyan-400 to-emerald-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]" 
                : "bg-indigo-600"}`}
            style={{ 
              width: `${percentage}%`,
              background: isDark ? 'linear-gradient(90deg, #4f46e5 0%, #06b6d4 50%, #10b981 100%)' : undefined 
            }}
          />
        </div>

        {/* Custom Thumb */}
        <div 
          className={`absolute w-5 h-5 rounded-full border-2 transition-transform duration-150 ease-out
            ${isDragging ? "scale-125" : "scale-100 hover:scale-110"}
            ${isDark 
              ? "bg-white border-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.4)]" 
              : "bg-zinc-900 border-white shadow-lg"}`}
          style={{ 
            left: `calc(${percentage}% - 10px)`,
          }}
        >
            {/* Center Dot for the Thumb */}
            <div className={`absolute inset-1 rounded-full ${isDark ? 'bg-zinc-100' : 'bg-zinc-800'} opacity-20`} />
        </div>
      </div>
    </div>
  );
}