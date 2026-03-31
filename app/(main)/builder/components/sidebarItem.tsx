"use client";
import InputFormField from "@/app/components/InputFormField";
import Textarea from "@/app/components/Textarea";
import FileUploader from "@/app/components/Filefield";
import Button from "@/app/components/Button";
import Dropdown from "@/app/components/Select";
import DatePicker from "@/app/components/Date";
import Checkbox from "@/app/components/Checkbox";
import Separator from "@/app/components/Seperator";
import H from "@/app/components/H";
import P from "@/app/components/P";
import MessageCard from "@/app/components/MessageCard";
import BulletPointDisplay from "@/app/components/BulletPointDisplay";
import LinkInput from "@/app/components/Link";
import LinkRedirect from "@/app/components/LinkRedirect";
import RadioGroup from "@/app/components/Radiobuttons";

export const SIDEBAR_ITEMS = [
  {
    Type: "Tags",
    elements: [
      {
        id: "P",
        title: "p tag",
        icon: "▾",
        type: "paragraph",
        data: {
          children:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          variant: "DEFAULT",
          className: "",
        },
      },

      {
        id: "H",
        title: "Header",
        icon: "▾",
        type: "heading",
        data: {
          level: 1,
          children: "Lorem Ipsum is simply dummy text ",
          className: "",
        },
      },
      {
        id: "bullet point",
        title: "Bullet point",
        icon: "▾",
        type: "bullet",
        data: {
          topic: "Place Holder",
          points: ["Point 1", "Point 2", "Point 3"],
        },
      },
      {
        id: "button",
        title: "Button",
        icon: "⏎",
        type: "button",
        data: {
          variant: "PRIMARY",
          placeholder: "place holder",
          value: "place holder",
          onClick: () => {},
        },
      },
    ],
  },
  {
    Type: "Inputs",
    elements: [
      {
        id: "text-input",
        title: "input",
        icon: "Aa",
        type: "textinput",
        data: {
          label: "Place holder",
          placeholder: "place holder",
          type: "text",
          value: "",
          onChange: (e) => {
            
          },
        },
      },
      {
        id: "Radio",
        title: "Radio Button",
        icon: "Aa",
        type: "radio",
        data: {
          label: "Place Holder",
          options: [
            {
              label: "option 1",
              value: "option 1",
              description: "description",
            },

            {
              label: "option 2",
              value: "option 2",
              description: "description",
            },

            {
              label: "option 3",
              value: "option 3",
              description: "description",
            },
          ],
          selectedValue: "",
          onChange: (value: string) => {},
        },
      },

      {
        id: "textarea",
        title: "Textarea",
        icon: "¶",
        type: "textarea",
        data: {
          label: "place holder",
          placeholder: "place holder",
          rows: "5",
          value: "some value",
          onChange: () => {},
        },
      },
      {
        id: "file-upload",
        title: "File",
        icon: "↑",
        type: "file",
        data: {
          label: "",
          onFileSelect: (file: File | null) => {},
          accept: "png",
        },
      },
      {
        id: "dropdown",
        title: "Select",
        icon: "▾",
        type: "select",
        data: {
          label: "",
          options: [
            {
              label: "value 1",
              value: "value 1",
            },

            {
              label: "value 2",
              value: "value 2",
            },

            {
              label: "value 3",
              value: "value 3",
            },
          ],
          onSelect: (value: string) => {},
          placeholder: "place",
        },
      },

      {
        id: "date",
        title: "Date",
        icon: "▾",
        type: "date",
        data: {
          label: "Place holder",
          value: "",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
          min: "",
          max: "",
        },
      },
      {
        id: "checkboc",
        title: "Checkbox",
        icon: "▾",
        type: "checkbox",
        data: {
          label: "place holder",
          checked: false,
          onChange: (checked: boolean) => {},
          description: "description",
        },
      },
    ],
  },
  {
    Type: "Design bits",
    elements: [
      {
        id: "Card",
        title: "Card",
        icon: "▾",
        type: "message",
        data: {
          variant: "CAUTION",
          title: "message card",
          message: "message",
        },
      },

      {
        id: "seperate",
        title: "Seperator",
        icon: "▾",
        type: "separator",
        data: {
          text: "if value is empty there will be no text here.",
        },
      },
    ],
  },

  // Links
  {
    Type: "Links",
    elements: [
      {
        id: "Link",
        title: "Link",
        icon: "▾",
        type: "link",
        data: {
          label: "place holder",
          placeholder: "plac holder",
          onLinkChange: (url: string) => {},
        },
      },
      {
        id: "Redirect",
        title: "Redirect",
        icon: "▾",
        type: "redirect",
        data: {
          label: "place holder",
          title: "place holder",
          description: "place holder",
          href: "place holder",
        },
      },
    ],
  },
];
