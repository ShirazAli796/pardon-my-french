"use client";
import Button from "@/app/components/Button";

export default function Navbar() {
  return (
    <div className=" flex justify-between items-center">
      <div className="">
        <h1 className="text-3xl font-bold">Form Builder</h1>
      </div>
      <div className="flex  gap-4 ">
        <Button
          variant={"PRIMARY"}
          placeholder={"Create Form"}
          value={"Create Form"}
          onClick={function (): void {
            console.log("asa jadu kiya onki nazron na.");
          }}
        />

        <Button
          variant={"SECONDARY"}
          placeholder={"Discard"}
          value={"discard"}
          onClick={function (): void {
            console.log("asa jadu kiya onki nazron na.");
          }}
        />
      </div>
    </div>
  );
}
