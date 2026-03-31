"use client";
import { MdOutlineTextFields } from "react-icons/md";

interface TabsProps {
  title: string;
  Icon: string;
}

export default function TabsContainer({ title, Icon }: TabsProps) {
  return (
    <div className="flex flex-col items-center gap-1 w-full">
      <div className="w-20  h-22 flex justify-center items-center rounded-sm bg-zinc-800/80 cursor-pointer">
        <MdOutlineTextFields className="text-zinc-400" />
      </div>
      <p className="text-[12px] text-white text-center">{title}</p>
    </div>
  );
}
