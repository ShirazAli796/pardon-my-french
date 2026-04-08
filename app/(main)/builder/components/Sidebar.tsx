"use client";
import { useDraggable } from "@dnd-kit/react";
import { SIDEBAR_ITEMS } from "./sidebarItem";
import { ChevronLeft, ChevronRight, Icon, Target } from "lucide-react";
import Button from "@/app/components/Button";
import { useBuilderContext } from "@/contexts/builderContext";
import { CircularLoader } from "@/app/components/Loader";
import Dropdown from "@/app/components/Select";
import InputFormField from "@/app/components/InputFormField";
import { X, Plus } from "lucide-react";

function DraggableSidebarItem({
  id,
  title,
  Icon,
}: {
  id: string;
  title: string;
  Icon: any;
}) {
  const { ref, isDragging } = useDraggable({
    id,
    data: { origin: "sidebar" },
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-1 p-2 rounded-lg
        bg-zinc-800 hover:bg-zinc-700 cursor-grab active:cursor-grabbing
        text-white text-[12px] transition-all select-none
        ${isDragging ? "opacity-50" : ""}`}
    >
      {/* <span className="text-lg">
        <Icon />
      </span> */}
      <span className="text-center">{title}</span>
    </div>
  );
}

export default function Sidebar({ items, setItems }) {
  const { isOpen, toggle, editMode, setEditMode } = useBuilderContext();

  const handleRendering = () => {
    // getting that needs be updated.
    let item = items.find((cur) => cur.id == editMode.itemId);
    if (!item) {
      return <p className="text-white">Item not found</p>;
    }

    switch (editMode.type) {
      case "paragraph": {
        return (
          <div>
            <Dropdown
              label={"Paragraph variants"}
              mode={"dark"}
              placeholder={item.data?.variant ?? "DEFAULT"}
              options={[
                { label: "Muted", value: "MUTED" },
                { label: "Small", value: "SMALL" },
                { label: "Bold", value: "BOLD" },
                { label: "Default", value: "DEFAULT" },
              ]}
              onSelect={function (value: string): void {
                setItems((prevItems) =>
                  prevItems.map((cur) =>
                    cur.id === editMode.itemId
                      ? { ...cur, data: { ...cur.data, variant: value } }
                      : cur,
                  ),
                );
              }}
            />

            <InputFormField
              label={"Paragraph label"}
              mode="dark"
              value={item.data.children}
              type={"text"}
              onChange={(value) => {
                setItems((prevItems) =>
                  prevItems.map((cur) =>
                    cur.id === editMode.itemId
                      ? { ...cur, data: { ...cur.data, children: value } }
                      : cur,
                  ),
                );
              }}
            />
          </div>
        );
      }

      case "heading": {
        return (
          <div>
            <Dropdown
              label={"Heading levels"}
              mode={"dark"}
              placeholder={item.data?.variant ?? "DEFAULT"}
              options={[
                { label: "1", value: 1 },
                { label: "2", value: 2 },
                { label: "3", value: 3 },
                { label: "4", value: 4 },
              ]}
              onSelect={function (value: string): void {
                setItems((prevItems) =>
                  prevItems.map((cur) =>
                    cur.id === editMode.itemId
                      ? { ...cur, data: { ...cur.data, level: value } }
                      : cur,
                  ),
                );
              }}
            />

            <InputFormField
              label={"Paragraph label"}
              mode="dark"
              value={item.data.children}
              type={"text"}
              onChange={(value) => {
                setItems((prevItems) =>
                  prevItems.map((cur) =>
                    cur.id === editMode.itemId
                      ? { ...cur, data: { ...cur.data, children: value } }
                      : cur,
                  ),
                );
              }}
            />
          </div>
        );
      }

      case "bullet": {
        return (
          <div>
            <InputFormField
              label={"Bullet point label"}
              mode="dark"
              value={item.data.topic}
              type={"text"}
              onChange={(value) => {
                setItems((prevItems) =>
                  prevItems.map((cur) =>
                    cur.id === editMode.itemId
                      ? { ...cur, data: { ...cur.data, topic: value } }
                      : cur,
                  ),
                );
              }}
            />

            <div className="flex justify-between items-center">
              <p className="text-zinc-400 text-sm my-3 ">Bullet Points</p>
              <Plus
                className="text-zinc-700 hover:text-zinc-300 cursor-pointer"
                width={18}
                height={18}
                onClick={() => {
                  setItems((prev) =>
                    prev.map((cur) =>
                      cur.id === editMode.itemId
                        ? {
                            ...cur,
                            data: {
                              ...cur.data,
                              points: [
                                ...cur.data.points,
                                `point ${cur.data.points.length + 1}`,
                              ],
                            },
                          }
                        : cur,
                    ),
                  );
                }}
              />
            </div>

            {item.data.points.map((v, index) => (
              <div className="flex items-center gap-2" key={index}>
                <InputFormField
                  label={" "}
                  mode="dark"
                  value={v}
                  type={"text"}
                  margin=""
                  onChange={(value) => {
                    setItems((prevItems) =>
                      prevItems.map((cur) =>
                        cur.id === editMode.itemId
                          ? {
                              ...cur,
                              data: {
                                ...cur.data,
                                points: cur.data.points.map((p, i) =>
                                  i === index ? value : p,
                                ),
                              },
                            }
                          : cur,
                      ),
                    );
                  }}
                />
                <X
                  className="w-5 h-5 text-zinc-500 hover:text-red-500 cursor-pointer flex-shrink-0"
                  onClick={() => {
                    setItems((prevItems) =>
                      prevItems.map((cur) =>
                        cur.id === editMode.itemId
                          ? {
                              ...cur,
                              data: {
                                ...cur.data,
                                points: cur.data.points.filter(
                                  (_, i) => i !== index,
                                ),
                              },
                            }
                          : cur,
                      ),
                    );
                  }}
                />
              </div>
            ))}
          </div>
        );
      }

      case "button": {
        return (
          <div className="flex flex-col items-center gap-2">
            <InputFormField
              label={"Button Title"}
              mode="dark"
              type={"text"}
              value={item.data.placeholder}
              margin=""
              onChange={(v) => {
                setItems((prev) =>
                  prev.map((cur) =>
                    cur.id === editMode.itemId
                      ? {
                          ...cur,
                          data: {
                            ...cur.data,
                            value: v,
                            placeholder: v,
                          },
                        }
                      : cur,
                  ),
                );
              }}
            />

            <Dropdown
              label={"Button Variants"}
              mode={"dark"}
              placeholder={item.data?.variant ?? "DEFAULT"}
              options={[
                { label: "Primary", value: "PRIMARY" },
                { label: "Secondary", value: "SECONDARY" },
              ]}
              onSelect={function (value: string): void {
                setItems((prev) =>
                  prev.map((cur) =>
                    cur.id == editMode.itemId
                      ? {
                          ...cur,
                          data: {
                            ...cur.data,
                            variant: value,
                          },
                        }
                      : cur,
                  ),
                );
              }}
            />
            <Dropdown
              label={"Button Actions"}
              mode={"dark"}
              placeholder={item.data?.variant ?? "DEFAULT"}
              options={[
                { label: "Submit", value: "submit" },
                { label: "Clear", value: "clear" },
              ]}
              onSelect={function (value: string): void {
                console.log(value);
              }}
            />


             <Dropdown
              label={"Button Size"}
              mode={"dark"}
              placeholder={item.data?.variant ?? "DEFAULT"}
              options={[
                { label: "Full", value: "full" },
                { label: "Half", value: "half" },
                { label: "Default", value: "default" },
              ]}
              onSelect={function (value: string): void {
                
              }}
            />
          </div>
        );
      }

      default:
        return (
          <div>
            <p className="text-white">No Component Found.</p>
          </div>
        );
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 h-screen flex flex-col justify-between
          bg-zinc-900 px-4 py-5 transform transition-all duration-300 ease-in-out
          w-3/4 sm:w-84 xl:w-100
          ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
          overflow-y-auto`}
      >
        {editMode.isActive == true ? (
          <>
            <div className="h-screen flex flex-col justify-between">
              <div className="">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    Edit Mode
                  </h1>
                  <button
                    onClick={() => toggle()}
                    className="p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-all cursor-pointer "
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-5">
                  {editMode.type === "" ? (
                    <CircularLoader size="lg" />
                  ) : (
                    handleRendering()
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button
                  variant="SECONDARY"
                  placeholder="Save"
                  value="Save"
                  onClick={() => {
                    setEditMode({
                      isActive: false,
                      type: "",
                    });
                  }}
                />
                <Button
                  variant="PRIMARY"
                  placeholder="Save"
                  value="Discard"
                  onClick={() => {
                    setEditMode({
                      isActive: false,
                      type: "",
                    });
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  Add-ons
                </h1>
                <button
                  onClick={() => toggle()}
                  className="p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-all cursor-pointer "
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>

              <input
                type="text"
                placeholder="Search"
                className="w-full mt-4 py-2 sm:py-3 px-3 sm:px-4 rounded-lg border border-zinc-800 bg-transparent
            text-white placeholder:text-white/40 outline-none focus:border-zinc-400/80 text-sm sm:text-base"
              />

              <div className="mt-4">
                {SIDEBAR_ITEMS.map((group) => (
                  <div key={group.Type} className="mb-4">
                    <p className="text-zinc-400 text-sm mb-2">{group.Type}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {group.elements?.map((item) => (
                        <DraggableSidebarItem
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          Icon={item.Icon}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 mt-4">
              <Button
                variant="SECONDARY"
                placeholder="Create Form"
                value="Create Form"
                onClick={() => {}}
              />
              <Button
                variant="PRIMARY"
                placeholder="Discard"
                value="Discard"
                onClick={() => {}}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
