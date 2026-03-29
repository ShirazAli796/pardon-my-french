"use client";
import { useEffect, useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import Form from "./Form";
import Sidebar from "./Sidebar";
import { SIDEBAR_ITEMS } from "./sidebarItem"; // your item definitions

export default function FormBuilder() {
  const initialFormItems = SIDEBAR_ITEMS.map((item) => ({
    ...item,
    id: `${item.id}-${Date.now()}`,
  }));

  const [formItems, setFormItems] = useState([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null);

  function handleDragEnd(event) {
    const sourceId = String(event.operation.source?.id ?? "");
    const targetId = String(event.operation.target?.id ?? "");

    const isFromSidebar = SIDEBAR_ITEMS.some((i) => i.id === sourceId);

    if (isFromSidebar) {
      const template = SIDEBAR_ITEMS.find((i) => i.id === sourceId);
      if (!template) return;

      const newItem = {
        ...template,
        id: `${template.id}-${Date.now()}`,
      };

      const targetIndex = formItems.findIndex((i) => i.id === targetId);

      setFormItems((prev) => {
        const next = [...prev];
        next.splice(targetIndex === -1 ? next.length : targetIndex, 0, newItem);
        return next;
      });
    } else {
      setFormItems((current) => move(current, event));
    }

    setActiveId(null);
    setOverId(null);
  }

  const tell = () => {
    console.log(formItems);
  };

  return (
    <DragDropProvider
      onDragStart={(e) => setActiveId(String(e.operation.source?.id))}
      onDragOver={(e) => setOverId(String(e.operation.target?.id ?? null))}
      onDragEnd={handleDragEnd}
    >
      <div className="w-full h-screen flex">
        {/* Sidebar */}
        <div className="w-89 shrink-0">
          <Sidebar />
        </div>

        <button onClick={tell}>click</button>

        {/* Form area */}
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
