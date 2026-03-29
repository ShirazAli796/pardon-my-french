"use client";
import { useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import Form from "./Form";
import Sidebar from "./Sidebar";
import { SIDEBAR_ITEMS } from "./sidebarItem";

const ALL_ELEMENTS = SIDEBAR_ITEMS.flatMap((group) => group.elements ?? []);

export default function FormBuilder() {
  const [formItems, setFormItems] = useState([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null);
  const [editModeActive, setEditModeActive] = useState();

  function handleDragEnd(event) {
    const sourceId = String(event.operation.source?.id ?? "");
    const targetId = String(event.operation.target?.id ?? "");

    if (!targetId || targetId === "null" || targetId === sourceId) {
      setActiveId(null);
      setOverId(null);
      return;
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
      <div className="w-full h-screen flex">
        <div className="w-89 shrink-0">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col items-center">
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
