"use client";
import { useDraggable } from "@dnd-kit/react";
import { SIDEBAR_ITEMS } from "./sidebarItem";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Button from "@/app/components/Button";

function DraggableSidebarItem({
  id,
  title,
  icon,
}: {
  id: string;
  title: string;
  icon: string;
}) {
  const { ref, isDragging } = useDraggable({
    id, 
    data: { origin: "sidebar" },
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-1 p-2 rounded-lg
        bg-zinc-800 hover:bg-zinc-700 cursor-grab active:cursor-grabbing
        text-white text-xs transition-all select-none
        ${isDragging ? "opacity-50" : ""}`}
    >
      <span className="text-lg">{icon}</span>
      <span>{title}</span>
    </div>
  );
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-5 left-5 z-50 bg-zinc-800 text-white p-2 rounded-full cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      <div
        className={`fixed top-0 left-0 z-40 w-80 h-screen flex flex-col justify-between
          bg-zinc-900 px-5 py-5 transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">Add-ons</h1>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <input
            type="text"
            placeholder="Search"
            className="w-full mt-4 py-3 px-4 rounded-lg border border-zinc-800 bg-transparent
            text-white placeholder:text-white/40 outline-none focus:border-zinc-400/80"
          />

          <div className="p-3 mt-2">
            <p className="text-zinc-400 text-sm mb-3">Input Fields</p>
            <div className="grid grid-cols-3 gap-2">
              {SIDEBAR_ITEMS.map((item) => (
                <DraggableSidebarItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button
            variant="SECONDARY"
            placeholder="Create Form"
            value="Create Form"
            onClick={() => {}}
          />
          <Button
            variant="PRIMARY"
            placeholder="Discard"
            value="Discard"
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
}
