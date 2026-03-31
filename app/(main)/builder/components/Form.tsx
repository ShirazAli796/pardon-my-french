// Form.tsx - accept props, NO DragDropProvider, NO local state for items
"use client";
import { Dispatch, SetStateAction } from "react";
import { useDroppable } from "@dnd-kit/react";
import Wrapper from "@/app/components/Wrapper";
import AddActionButton from "./AddActionButton";

interface FormItem {
  id: string;
  component: React.ReactNode;
}

interface FormProps {
  items: FormItem[];
  setItems: Dispatch<SetStateAction<FormItem[]>>;
  overId: string | null;
  activeId: string | null;
}

function EmptyDropZone() {
  const { ref, isOver } = useDroppable({ id: "form-dropzone" });
  return (
    <div
      ref={ref}
      className={`min-h-32 rounded-xl border-2  border-dashed hover:border-zinc-400 transition-all flex items-center justify-center
        ${isOver ? "border-blue-400 bg-red-500" : "border-zinc-300"}`}
    >
      <p className="text-zinc-500 text-sm">
        Drag fields here to build your form
      </p>
    </div>
  );
}

export default function Form({ items, setItems, overId, activeId }: FormProps) {
  const overIndex = items.findIndex((i) => i.id === overId);
  const activeIndex = items.findIndex((i) => i.id === activeId);

  return (
    <>
      <div className="my-6">
        {items.length === 0 && <EmptyDropZone />}

        {items.map((item) => (
          <Wrapper
            key={item.id}
            id={item.id}
            type={item.type}
            props={item.data}
            showLineTop={item.id === overId && overIndex < activeIndex}
            showLineBottom={item.id === overId && overIndex > activeIndex}
            onEdit={() => console.log("edit", item.id)}
            onDelete={() =>
              setItems((prev) => prev.filter((i) => i.id !== item.id))
            }
          />
        ))}

        {/* <AddActionButton onClick={() => console.log("add")} /> */}
      </div>
    </>
  );
}
