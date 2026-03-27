import React from 'react';
import ZincAccordionItem from './ZincAccordionItem'; // Import the weighted one we made

interface Section {
  title: string;
  content: string;
}

interface Props {
  sections: Section[];
  allowMultiple?: boolean; // If true, multiple can stay open
}

export default function AccordionDisplay({ sections, allowMultiple = true }: Props) {
  // Filter out completely empty sections to keep the UI clean
  const activeSections = sections.filter(s => s.title.trim() !== "" || s.content.trim() !== "");

  if (activeSections.length === 0) {
    return (
      <div className="w-full py-12 border-2 border-dashed border-zinc-100 rounded-2xl flex flex-col items-center justify-center bg-zinc-50/20">
        <p className="text-sm font-medium text-zinc-400">No accordion sections to display.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {activeSections.map((section, index) => (
        <ZincAccordionItem 
          key={index} 
          title={section.title || `Section ${index + 1}`}
          defaultOpen={index === 0} // Open the first one by default for a "pro" feel
        >
          <div className="text-zinc-600 leading-relaxed text-sm whitespace-pre-wrap">
            {section.content || "No content provided for this section."}
          </div>
        </ZincAccordionItem>
      ))}
    </div>
  );
}