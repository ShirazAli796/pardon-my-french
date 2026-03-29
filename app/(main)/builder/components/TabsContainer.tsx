"use client";

import React, { JSX } from "react";
import { MdOutlineTextFields } from "react-icons/md";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface TabsProps {
  title: string;
  Icon: string;
}

export default function TabsContainer({ title, Icon }: TabsProps) {
  return (
    <div className="flex flex-col items-center gap-1 w-full">
      <div className="w-20   h-16 flex justify-center items-center rounded-sm bg-zinc-800/80 cursor-pointer">
        <MdOutlineTextFields className="text-zinc-400" />
      </div>
      <p className="text-[12px] text-white text-center">{title}</p>
    </div>
  );
}
