import React, { useState } from "react";
import { Link2, X, ExternalLink } from "lucide-react";

interface Props {
  label: string;
  placeholder?: string;
  onLinkChange: (url: string) => void;
}

export default function LinkInput({
  label,
  placeholder = "https://example.com",
  onLinkChange,
}: Props) {
  const [url, setUrl] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && url.trim()) {
      setIsConfirmed(true);
      onLinkChange(url);
    }
  };

  const removeLink = () => {
    setUrl("");
    setIsConfirmed(false);
    onLinkChange("");
  };

  return (
    <div className="w-full flex flex-col gap-1.5">
      <label className="text-sm font-medium text-zinc-600 ml-1 mb-1">
        {label}
      </label>

      <div className="relative w-full transition-all duration-200">
        {!isConfirmed ? (
          <div className="group relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-sm group-focus-within:border-zinc-800 transition-colors">
              <Link2 className="w-4 h-4 text-zinc-500" />
            </div>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={handleConfirm}
              placeholder={placeholder}
              className="w-full h-14 pl-14 pr-4 rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50/50 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-800 focus:bg-zinc-100 focus:ring-4 focus:ring-zinc-800/5 transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider bg-zinc-100 px-1.5 py-0.5 rounded">
                Press Enter
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full flex items-center justify-between p-3 bg-white border border-zinc-200 rounded-lg animate-in fade-in zoom-in-95">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-md bg-zinc-100 flex items-center justify-center text-zinc-600 shrink-0">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-medium text-zinc-900 truncate">
                  Linked Resource
                </span>
                <span className="text-xs text-zinc-500 truncate">{url}</span>
              </div>
            </div>
            <button
              onClick={removeLink}
              className="p-1.5 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
