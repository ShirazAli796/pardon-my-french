"use client";
import React from "react";
import InputFormField from "./components/InputFormField";
import Button from "./components/Button";
import Dropdown from "./components/Select";
import Checkbox from "./components/Checkbox";
import Textarea from "./components/Textarea";
import RadioGroup from "./components/Radiobuttons";
import FileUploader from "./components/Filefield";
import DatePicker from "./components/Date";
import { SkeletonLoader } from "./components/SkeletonLoader";
import { StatCard } from "./components/StatCard";
import { Toast } from "./components/Toast";
import ZincTable from "./components/Table";
import { EmptyState } from "./components/Empty";
import Separator from "./components/Seperator";
import P from "./components/P";
import H from "./components/H";
import BulletPointMaker from "./components/BulletPoints";
import BulletPointDisplay from "./components/BulletPointDisplay";
import { AlertCircle } from "lucide-react";
import MessageCard from "./components/MessageCard";
import { Tooltip } from "./components/ToolTip";
import Modal from "./components/Modal";
import ZincAccordionItem, { AccordionItem } from "./components/AccordinDisplay";
import AccordionMaker from "./components/AccordinMaker";
import AccordionDisplay from "./components/AccordinDisplay";
import Sidebar from "./(main)/builder/components/Sidebar";
import ZincSidebar from "./components/SideBar";
import Slide from "./components/Slider";
import Slider from "./components/Slider";
import CustomVibrantSlider from "./components/Slider";

export default function page() {
  const foodOptions = [
    { label: "Italian Cuisine", value: "italian" },
    { label: "Japanese Sushi", value: "japanese" },
  ];

  const planOptions = [
    {
      label: "Basic Plan",
      value: "basic",
      description: "Free forever with limited features.",
    },
    {
      label: "Pro Plan",
      value: "pro",
      description: "Advanced tools for power users.",
    },
  ];
  return (
    <div className="p-5">
      <h1 className="text-5xl font-bold">Form Fields</h1>

      <div className="mt-5"></div>

      <EmptyState />

      {/* <ZincTable columns={[{header: "cool", accessor: "sad"}, {header: "cool-2", accessor: "sadsadsa"}, {header: "cool-3", accessor: "sadsadsad"} ]} data={["nice", "ok", "sadsad "]}/> */}

      <StatCard label={"Some"} value={"Value"} trend={"trend"} />

      <div className="mb-10"></div>
      <SkeletonLoader />

      <InputFormField placeholder="name" label="Name" />

      <DatePicker
        label="Deadline Date"
        onChange={(e) => console.log(e.target.value)}
      />

      <Button
        variant={"PRIMARY"}
        fullWidth={'default'}
        value={"Something"}
        onClick={() => {}}
      />
      <Dropdown
        label="Category"
        options={foodOptions}
        onSelect={(val) => console.log(val)}
      />

      <Checkbox
        label="Accept Terms and Conditions"
        description="You agree to our privacy policy and data usage."
        checked={true}
        onChange={() => {}}
      />

      <Textarea
        label="Project Description"
        placeholder="Tell us more about your modern interface..."
        rows={5}
      />

      <RadioGroup
        label="Select a Plan"
        options={planOptions}
        selectedValue={"basic"}
        onChange={() => {}}
      />


      <FileUploader
        label="Profile Picture"
        onFileSelect={(file) => console.log("File:", file)}
        accept="image/*"
      />

      <Separator text="Text field here" />

      <H level={1} children={"Cool isn't it"} />
      <P variant={"BOLD"}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        exercitationem reprehenderit quos necessitatibus quas fugit ipsam error,
        in doloremque cupiditate. Molestiae cum, quibusdam libero velit enim
        distinctio cupiditate mollitia ad beatae harum eum animi quasi ipsum
        nesciunt dolorum? Deleniti natus quae, officia nam quisquam dolores sunt
        quam deserunt molestias voluptatibus.
      </P>

      <BulletPointMaker />

      <BulletPointDisplay
        topic={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        points={[
          "quasi ipsum nesciunt dolorum? ",
          "officia nam quisquam dolores sunt quam deserunt molestias",
        ]}
      />

      <MessageCard
        variant={"WARNING"}
        title={"No extra data"}
        message={"got it ?"}
      />

      {/* <Tooltip text={"some data is lost"} children={"ok"}/> */}
      {/* 
      <Modal isOpen={true} onClose={function (): void {
        throw new Error("Function not implemented.");
      } } title={""} ><P>Some</P></Modal> */}

      <AccordionMaker />

      <AccordionDisplay
        sections={[
          {
            title: "title",
            content: "lorem sadsadsa;mdlsa;ld",
          },
          {
            title: "title",
            content: "lorem sadsadsa;mdlsa;ld",
          },
          {
            title: "title",
            content: "lorem sadsadsa;mdlsa;ld",
          },
        ]}
      />
    </div>
  );
}
