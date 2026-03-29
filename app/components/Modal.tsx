import React, { useEffect } from "react";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
}: Props) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop with Frosted Glass Effect */}
      <div
        className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Content Card */}
      <div className="relative w-full max-w-4xl bg-zinc-900 rounded-2xl shadow-2xl border overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="px-6 py-5  flex items-center justify-between bg-zinc-900">
          <div className="flex flex-col">
            <h3 className="text-lg  text-zinc-200 tracking-tight">
              {title}
            </h3>
            {description && (
              <p className="text-xs text-zinc-500 mt-0.5">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-all active:scale-95 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="px-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {children}
        </div>

        {/* Footer (Optional) */}
        <div className="px-6 py-4 bg-zinc-900  flex justify-end gap-3">
          {footer ? (
            footer
          ) : (
            <>
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-200 cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-2 rounded-lg bg-zinc-800 cursor-pointer text-zinc-600 text-sm font-bold hover:bg-zinc-800 hover:text-white transition-all active:scale-95 shadow-sm">
                Confirm
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
