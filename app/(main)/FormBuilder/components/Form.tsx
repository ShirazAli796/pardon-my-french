"use client";
import React from "react";
import AddActionButton from "./AddActionButton";
import InputFormField from "@/app/components/InputFormField";
import Textarea from "@/app/components/Textarea";
import FileUploader from "@/app/components/Filefield";
import Button from "@/app/components/Button";
import Dropdown from "@/app/components/Select";
import { DragDropProvider } from "@dnd-kit/react";
import Wrapper from "@/app/components/Wrapper";

export default function Form() {
  return (
    <>
      <DragDropProvider>
        <Wrapper
          children={
            <InputFormField label={"Name"} placeholder="Enter Your Cnic " />
          }
        />

        <Wrapper
          children={
            <InputFormField label={"Email"} placeholder="Enter Email" />
          }
        />
        <Wrapper children={<Textarea label={"Describe your self"} />} />
        <Wrapper
          children={
            <FileUploader
              label={""}
              onFileSelect={function (file: File | null): void {}}
            />
          }
        />
        <Wrapper
          children={
            <Dropdown
              label={""}
              options={[
                {
                  label: "Apple",
                  value: "Apple",
                },
                {
                  label: "Banana",
                  value: "banana",
                },
                {
                  label: "Pine Apple",
                  value: "Pine Apple",
                },
              ]}
              onSelect={function (value: string): void {}}
            />
          }
        />
        <Wrapper
          children={
            <Button
              variant={"PRIMARY"}
              placeholder={""}
              value={"Apply"}
              onClick={function (): void {}}
            />
          }
        />
        {/* <Wrapper children={undefined} />
        <Wrapper children={undefined} />
        <Wrapper children={undefined} /> */}

        <AddActionButton
          onClick={function (): void {
            console.log("ok");
          }}
        />
      </DragDropProvider>
    </>
  );
}
