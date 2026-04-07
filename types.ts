import { IconType } from "react-icons";


type ParagraphData = {
  children: string;
  variant: "DEFAULT" | "PRIMARY";
  className?: string;
};

type HeadingData = {
  level: number;
  children: string;
  className?: string;
};

type BulletData = {
  topic: string;
  points: string[];
};

type ButtonData = {
  variant: "PRIMARY" | "SECONDARY";
  placeholder: string;
  value: string;
  onClick: () => void;
};

type TextInputData = {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: () => void;
};

type RadioData = {
  label: string;
  options: {
    label: string;
    value: string;
    description?: string;
  }[];
  selectedValue: string;
  onChange: (value: string) => void;
};

type BaseElement<TType, TData> = {
  id: string;
  title: string;
  Icon: IconType | any; // lucide + react-icons mix
  type: TType;
  data: TData;
};
