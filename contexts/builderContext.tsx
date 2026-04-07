"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the shape of edit mode state
type EditModeType = {
  isActive: boolean;
  itemId?: string,
  type: string;
};

type BuilderContextType = {
  isOpen: boolean;
  toggle: () => void;
  setIsOpen: any;
  editMode: EditModeType;
  setEditMode: Dispatch<SetStateAction<EditModeType>>;
};

const BuilderContext = createContext<BuilderContextType | null>(null);

export function BuilderProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [editMode, setEditMode] = useState<EditModeType>({
    isActive: false,
    itemId: "",
    type: "",
  });

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <BuilderContext.Provider value={{ isOpen, toggle, setIsOpen, editMode, setEditMode }}>
      {children}
    </BuilderContext.Provider>
  );
}

// Custom hook
export function useBuilderContext() {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error("useBuilderContext must be used inside BuilderProvider");
  }
  return context;
}
