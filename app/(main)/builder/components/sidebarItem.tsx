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

export const SIDEBAR_ITEMS = [
  {
    id: "text-input",
    title: "Text",
    icon: "Aa",
    component: (
      <InputFormField type="text" label="Text Field" placeholder="Enter text" />
    ),
  },
  {
    id: "email-input",
    title: "Email",
    icon: "@",
    component: (
      <InputFormField type="email" label="Email" placeholder="Enter email" />
    ),
  },
  {
    id: "textarea",
    title: "Textarea",
    icon: "¶",
    component: <Textarea label="Description" />,
  },
  {
    id: "file-upload",
    title: "File",
    icon: "↑",
    component: <FileUploader label="" onFileSelect={() => {}} />,
  },
  {
    id: "dropdown",
    title: "Select",
    icon: "▾",
    component: (
      <Dropdown
        label=""
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
        ]}
        onSelect={() => {}}
      />
    ),
  },

  {
    id: "date",
    title: "Date",
    icon: "▾",
    component: <DatePicker label={"Date Picker"} />,
  },
  {
    id: "checkboc",
    title: "Checkbox",
    icon: "▾",
    component: (
      <Checkbox
        label={"Terms and condition"}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        checked={false}
        onChange={function (checked: boolean): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
  },
  {
    id: "seperate",
    title: "Seperator",
    icon: "▾",
    component: <Separator text="a friend." />,
  },
  {
    id: "H",
    title: "Header",
    icon: "▾",
    component: <H level={1} children={"Lorem Ipsum is simply dummy text"} />,
  },

  {
    id: "Link",
    title: "Link",
    icon: "▾",
    component: (
      <LinkInput
        label={"Enter Your Linkedin Or github"}
        onLinkChange={function (url: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
  },

  {
    id: "Redirect",
    title: "Redirect",
    icon: "▾",
    component: (
      <LinkRedirect
        label={"Our page"}
        title={"out web"}
        description={"some"}
        href={"www.google.com"}
      />
    ),
  },
  {
    id: "bullet point",
    title: "Bullet point",
    icon: "▾",
    component: (
      <BulletPointDisplay
        topic={"Requirements"}
        points={[
          "There are many variations of passages of Lorem Ipsum available",
          "but the majority have suffered alteration in some form, by injected",
          "humour, or randomised words which don't look even slightly",
        ]}
      />
    ),
  },
  {
    id: "Card",
    title: "Card",
    icon: "▾",
    component: (
      <MessageCard
        variant={"CAUTION"}
        title={"Contrary to popular belief."}
        message={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        }
      />
    ),
  },
  {
    id: "P",
    title: "p tag",
    icon: "▾",
    component: (
      <P
        variant="MUTED"
        children={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }
      />
    ),
  },
  {
    id: "button",
    title: "Button",
    icon: "⏎",
    component: (
      <Button
        variant="PRIMARY"
        placeholder=""
        value="Submit"
        onClick={() => {}}
      />
    ),
  },
];
