import React, { useState } from 'react';
import { Plus, Trash2, Layout, ChevronDown } from 'lucide-react';

interface AccordionSection {
  title: string;
  content: string;
}

export default function AccordionMaker() {
  const [sections, setSections] = useState<AccordionSection[]>([
    { title: 'New Section', content: '' }
  ]);

  const addSection = () => {
    if (sections.length < 10) {
      setSections([...sections, { title: '', content: '' }]);
    }
  };

  const updateSection = (index: number, field: keyof AccordionSection, value: string) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const removeSection = (index: number) => {
    if (sections.length > 1) {
      setSections(sections.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm">
      {/* Header Info */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center">
          <Layout className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Accordion Builder</h3>
          <p className="text-xs text-zinc-400 font-medium uppercase tracking-widest">Construct your dynamic sections</p>
        </div>
      </div>

      {/* Builder List */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className="p-5 rounded-xl border border-zinc-300 bg-zinc-50/30 group animate-in fade-in slide-in-from-bottom-2"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-black text-zinc-300 uppercase tracking-tighter bg-white px-2 py-0.5 rounded border border-zinc-100">
                Section {index + 1}
              </span>
              <button 
                onClick={() => removeSection(index)}
                className="p-1.5 rounded-lg text-zinc-300 hover:text-red-500 hover:bg-red-50 transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Title Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Accordion Title..."
                  value={section.title}
                  onChange={(e) => updateSection(index, 'title', e.target.value)}
                  className="w-full bg-white border border-zinc-200 rounded-lg py-2.5 px-4 text-sm font-bold text-zinc-900 outline-none focus:border-zinc-800 focus:ring-4 focus:ring-zinc-800/5 transition-all"
                />
              </div>

              {/* Content Input */}
              <textarea
                placeholder="Content goes here..."
                rows={3}
                value={section.content}
                onChange={(e) => updateSection(index, 'content', e.target.value)}
                className="w-full bg-white border border-zinc-200 rounded-lg py-3 px-4 text-sm text-zinc-600 outline-none focus:border-zinc-800 transition-all resize-none"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Controls */}
      <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
        <button
          onClick={addSection}
          disabled={sections.length >= 10}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm transition-all
            ${sections.length >= 10 
              ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed' 
              : 'bg-zinc-800 text-white hover:bg-zinc-900 active:scale-95 shadow-lg shadow-zinc-800/10'}`}
        >
          <Plus className="w-4 h-4" />
          Add Section
        </button>
        
        <span className="text-xs font-bold text-zinc-400">
          {sections.length} / 10 Sections
        </span>
      </div>
    </div>
  );
}