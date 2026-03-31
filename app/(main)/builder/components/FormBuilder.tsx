"use client";
import { useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import Form from "./Form";
import Sidebar from "./Sidebar";
import { SIDEBAR_ITEMS } from "./sidebarItem";
import { ChevronRight } from "lucide-react";
import { BuilderProvider, useBuilderContext } from "@/contexts/builderContext";

const ALL_ELEMENTS = SIDEBAR_ITEMS.flatMap((group) => group.elements ?? []);

export default function FormBuilder() {
  const [formItems, setFormItems] = useState([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null);
  const { isOpen, toggle, setEditMode } = useBuilderContext();

  function handleDragEnd(event) {
    const sourceId = String(event.operation.source?.id ?? "");
    const targetId = String(event.operation.target?.id ?? "");

    if (!targetId || targetId === "null" || targetId === sourceId) {
      setActiveId(null);
      setOverId(null);
      return; // ← was returning here but editMode was already set above
    }

    const isFromSidebar = ALL_ELEMENTS.some((i) => i.id === sourceId);

    if (isFromSidebar) {
      const template = ALL_ELEMENTS.find((i) => i.id === sourceId);
      if (!template) return;

      const newItem = {
        ...template,
        id: `${template.id}-${Date.now()}`,
      };

      const targetIndex = formItems.findIndex((i: any) => i.id === targetId);

      setFormItems((prev) => {
        const next = [...prev];
        next.splice(
          targetIndex === -1 ? next.length : targetIndex + 1,
          0,
          newItem,
        );
        return next;
      });

      setEditMode({ isActive: true, type: template.type }); // ✅ only fires on valid sidebar drop
    } else {
      setFormItems((current) => move(current, event));
    }

    setActiveId(null);
    setOverId(null);
  }

  return (
    <DragDropProvider
      onDragStart={(e) => setActiveId(String(e.operation.source?.id))}
      onDragOver={(e) => setOverId(String(e.operation.target?.id ?? null))}
      onDragEnd={handleDragEnd}
    >
      <div className={`w-full h-screen ${isOpen ? "flex" : ""}`}>
        {!isOpen && (
          <button
            onClick={() => toggle()}
            className="fixed top-5 left-5 z-50 bg-zinc-800 text-white p-2 rounded-full cursor-pointer "
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
        <div
          className={`w-80 shrink-0 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <Sidebar />
        </div>

        <div
          className={`flex-1 flex flex-col items-center transition-all duration-300 ease-in-out ${isOpen ? "ml-80" : "ml-0"}`}
        >
          <main className="w-full max-w-5xl">
            <Form
              items={formItems}
              setItems={setFormItems}
              overId={overId}
              activeId={activeId}
            />
          </main>
        </div>
      </div>
    </DragDropProvider>
  );
}
