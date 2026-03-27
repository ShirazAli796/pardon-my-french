import React from "react";
import { Plus } from "lucide-react";

interface Props {
  label?: string;
  onClick: () => void;
  height?: string; // Optional: customize the height
}

export default function AddActionButton({
  label,
  onClick,
  height = "min-h-32",
}: Props) {
  return (
    <div className="w-full flex flex-col gap-1.5 mt-6 " onClick={onClick}>
      {/* {label && (
        <label className="text-sm font-medium text-zinc-500 ml-1 mb-1">
          {label}
        </label>
      )} */}

      <button
        type="button"
        className={`
          group relative w-full ${height} rounded-xl border-2 border-dashed 
          flex flex-col items-center justify-center p-6 transition-all duration-200
          border-zinc-200 bg-zinc-50/50 hover:border-zinc-400 hover:bg-white 
          hover:shadow-xl hover:shadow-zinc-400/5 active:scale-[0.99] cursor-pointer 
        `}
      >
        <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-3  group-hover:border-zinc-400 group-hover:scale-110 transition-all duration-200">
          <Plus className="w-6 h-6 text-zinc-400 hover:text-zinc-500" />
        </div>

        {/* <p className="text-sm  text-zinc-400 group-hover:text-zinc-500 transition-colors  tracking-widest"></p> */}
      </button>
    </div>
  );
}
