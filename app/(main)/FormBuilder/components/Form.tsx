"use client";
import { useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import AddActionButton from "./AddActionButton";
import InputFormField from "@/app/components/InputFormField";
import Textarea from "@/app/components/Textarea";
import FileUploader from "@/app/components/Filefield";
import Button from "@/app/components/Button";
import Dropdown from "@/app/components/Select";
import Wrapper from "@/app/components/Wrapper";
import Modal from "@/app/components/Modal";
import P from "@/app/components/P";
import H from "@/app/components/H";
import { Component } from "lucide-react";
import Container from "@/app/components/Container";

const initialItems = [
  {
    id: "name",
    component: (
      <InputFormField type="text" label="Name" placeholder="Enter Your Cnic" />
    ),
  },

  

  {
    id: "email",
    component: (
      <InputFormField type="email" label="Email" placeholder="Enter Email" />
    ),
  },
  {
    id: "bio",
    component: <Textarea label="Describe your self" />,
  },
  {
    id: "file",
    component: <FileUploader label="" onFileSelect={() => {}} />,
  },
  {
    id: "fruit",
    component: (
      <Dropdown
        label=""
        options={[
          { label: "Apple", value: "Apple" },
          { label: "Banana", value: "banana" },
          { label: "Pine Apple", value: "Pine Apple" },
        ]}
        onSelect={() => {}}
      />
    ),
  },
  {
    id: "submit",
    component: (
      <Button
        variant="PRIMARY"
        placeholder=""
        value="Apply"
        onClick={() => {}}
      />
    ),
  },
];

export default function Form() {
  const [items, setItems] = useState(initialItems);
  const [overId, setOverId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const overIndex = items.findIndex((i) => i.id === overId);
  const activeIndex = items.findIndex((i) => i.id === activeId);

  return (
    <>
      {/* <Modal isOpen={true} onClose={function (): void {}} title={""}>
        <InputFormField label={""} type={'text'} />
        <InputFormField label={""} type={"number"} />
        <InputFormField label={""} type={"number"} />
      </Modal> */}

      <DragDropProvider
        onDragStart={(event) => setActiveId(String(event.operation.source?.id))}
        onDragOver={(event) =>
          setOverId(String(event.operation.target?.id ?? null))
        }
        onDragEnd={(event) => {
          setItems((current) => move(current, event));
          setActiveId(null);
          setOverId(null);
        }}
      >
        {items.map((item) => (
          <Wrapper
            key={item.id}
            id={item.id}
            showLineTop={item.id === overId && overIndex < activeIndex}
            showLineBottom={item.id === overId && overIndex > activeIndex}
            onEdit={() => console.log("edit", item.id)}
            onDelete={() =>
              setItems((prev) => prev.filter((i) => i.id !== item.id))
            }
          >
            {item.component}
          </Wrapper>
        ))}
      </DragDropProvider>
      <AddActionButton onClick={() => console.log("ok")} />
    </>
  );
}
