"use client";
import { PiParagraph } from "react-icons/pi";
import { Heading } from "lucide-react";
import { CaseSensitive } from "lucide-react";

export const SIDEBAR_ITEMS = [
  {
    Type: "Tags",
    elements: [
      {
        id: "P",
        title: "Paragraph",
        Icon: CaseSensitive,
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
        Icon: Heading,
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
        Icon: PiParagraph,
        type: "bullet",
        data: {
          topic: "Place Holder",
          points: ["Point 1", "Point 2", "Point 3"],
        },
      },
      {
        id: "button",
        title: "Button",
        Icon: PiParagraph,
        type: "button",
        data: {
          variant: "PRIMARY",
          placeholder: "place holder",
          value: "place holder",
          action: "",
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
        Icon: PiParagraph,
        type: "textinput",
        data: {
          label: "Place holder",
          placeholder: "place holder",
          type: "text",
          value: "",
          onChange: () => {},
        },
      },
      {
        id: "Radio",
        title: "Radio",
        Icon: PiParagraph,
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
        Icon: PiParagraph,
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
        Icon: PiParagraph,
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
        Icon: PiParagraph,
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
        Icon: PiParagraph,
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
        Icon: PiParagraph,
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
        Icon: PiParagraph,
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
        Icon: PiParagraph,
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
        Icon: PiParagraph,
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
        Icon: PiParagraph,
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
