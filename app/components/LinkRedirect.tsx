import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

interface Props {
  label: string;
  title: string;
  description: string;
  href: string;
}

export default function LinkRedirect({
  label,
  title,
  description,
  href,
}: Props) {
  return (
    <div className="w-full flex flex-col gap-1.5">
      <label className="text-sm font-medium text-zinc-600 ml-1 mb-1">
        {label}
      </label>

      <a
        href={href  }
        target="_blank"
        rel="noopener noreferrer"
        className="
          group relative w-full min-h-32 rounded-xl border-2 border-dashed 
          flex flex-col items-center justify-center p-6 cursor-pointer 
          transition-all duration-200 border-zinc-200 bg-zinc-50/50 
          hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-sm
          active:scale-[0.99]
        "
      >
        <div className="flex flex-col items-center text-center">
          {/* Icon Circle - Matches your UploadCloud style */}
          <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-3 shadow-sm group-hover:border-zinc-400 transition-colors">
            <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-zinc-800" />
          </div>

          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-zinc-900">{title}</p>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-1 transition-transform" />
          </div>

          <p className="text-xs text-zinc-400 mt-1 max-w-[240px]">
            {description}
          </p>
        </div>

        {/* Subtle "Redirect" badge to match the UI feel */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-white border border-zinc-100 px-2 py-0.5 rounded-full shadow-sm">
            Visit Site
          </span>
        </div>
      </a>
    </div>
  );
}
