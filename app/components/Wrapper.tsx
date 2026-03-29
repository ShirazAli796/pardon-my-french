import React, { useState, useEffect, useRef } from "react";
import { Edit2, Trash2, GripVertical } from "lucide-react";
import { useSortable } from "@dnd-kit/react/sortable";
import dynamic from "next/dynamic";
import { SkeletonLoader } from "./SkeletonLoader";

interface Props {
  id: string;
  children: React.ReactNode;
  text: string;
  onEdit?: () => void;
  onDelete?: () => void;
  showLineTop?: boolean;
  showLineBottom?: boolean;
}

const componentsMap = {
  text: dynamic(() => import("./InputFormField"), {
    loading: () => <SkeletonLoader />,
  }),
};

export default function Wrapper({
  id,
  children,
  text,
  onEdit,
  onDelete,
  showLineTop,
  showLineBottom,
}: Props) {
  const [menuPos, setMenuPos] = useState<{ x: number; y: number } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const Component = componentsMap[text];

  const { ref, handleRef, isDragging } = useSortable({
    id,
  });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();

    const clickX = e.clientX;
    const clickY = e.clientY;

    requestAnimationFrame(() => {
      const menuHeight = menuRef.current?.offsetHeight || 140;
      const viewportHeight = window.innerHeight;

      let newY = clickY;

      if (clickY + menuHeight > viewportHeight) {
        newY = clickY - menuHeight;
      }

      setMenuPos({ x: clickX, y: newY });
    });
  };
  useEffect(() => {
    const handleClick = () => setMenuPos(null);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      ref={ref}
      onContextMenu={handleContextMenu}
      className="relative group w-full flex items-start gap-1 py-1 rounded-xl transition-all duration-200 hover:bg-zinc-50/80"
      style={{ opacity: isDragging ? 0.3 : 1 }}
    >
      {/* DROP INDICATOR — TOP */}
      {showLineTop && (
        <span className="absolute -top-px left-0 right-0 h-0.5 bg-zinc-200 rounded-full z-10" />
      )}

      <div className="flex-1">{children}</div>
      {menuPos && (
        <div
          ref={menuRef}
          style={{ top: menuPos.y, left: menuPos.x }}
          className="fixed z-[999] w-58 bg-zinc-800 border border-zinc-700 rounded-lg py-2 animate-in fade-in zoom-in-95 shadow-2xl"
        >
          <div className="px-4 py-1.5 mb-1">
            <span className="text-xs text-zinc-300 capitalize tracking-widest">
              Field Actions
            </span>
          </div>
          <button
            onClick={() => {
              onEdit?.();
              setMenuPos(null);
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-zinc-700/50 transition-colors cursor-pointer"
          >
            <Edit2 className="w-3.5 h-3.5 text-zinc-400" />
            Edit Properties
          </button>
          <button
            onClick={() => {
              onDelete?.();
              setMenuPos(null);
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:text-red-400 hover:bg-red-500/10 transition-all cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5 text-zinc-400" />
            Remove Field
          </button>
        </div>
      )}

      {/* DROP INDICATOR — BOTTOM */}
      {showLineBottom && (
        <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-zinc-200 rounded-full z-10" />
      )}

      <div
        ref={handleRef}
        className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150 cursor-grab active:cursor-grabbing"
      >
        <GripVertical className="w-5 h-5 text-zinc-300 hover:text-zinc-900" />
      </div>
    </div>
  );
}
