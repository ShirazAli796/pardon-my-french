import React, { useState } from 'react';
import { Plus, Trash2, List } from 'lucide-react';

export default function BulletPointMaker() {
  const [topic, setTopic] = useState('');
  const [points, setPoints] = useState<string[]>(['']);

  const addPoint = () => {
    if (points.length < 20) {
      setPoints([...points, '']);
    }
  };

  const updatePoint = (index: number, value: string) => {
    const newPoints = [...points];
    newPoints[index] = value;
    setPoints(newPoints);
  };

  const removePoint = (index: number) => {
    if (points.length > 1) {
      setPoints(points.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm">
      {/* Topic / Header Input */}
      <div className="mb-8">
        <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1 mb-2 block">
          List Topic
        </label>
        <input
          type="text"
          placeholder="e.g., Project Deliverables"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="text-2xl font-bold text-zinc-900 w-full bg-transparent border-b-2 border-zinc-100 focus:border-zinc-800 outline-none pb-2 transition-all placeholder:text-zinc-200"
        />
      </div>

      {/* Bullet Points List */}
      <div className="space-y-3">
        {points.map((point, index) => (
          <div key={index} className="group flex items-center gap-3 animate-in fade-in slide-in-from-left-2">
            {/* The Bullet Number */}
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-400 group-focus-within:bg-zinc-800 group-focus-within:text-white transition-all">
              {index + 1}
            </div>

            {/* The Input */}
            <input
              type="text"
              placeholder="Enter point..."
              value={point}
              onChange={(e) => updatePoint(index, e.target.value)}
              className="flex-grow py-2 px-1 bg-transparent text-zinc-700 outline-none border-b border-transparent focus:border-zinc-200 transition-all"
            />

            {/* Delete Action */}
            <button
              onClick={() => removePoint(index)}
              className="opacity-0 group-hover:opacity-100 p-2 text-zinc-300 hover:text-red-500 transition-all"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Add Button & Counter */}
      <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
        <button
          onClick={addPoint}
          disabled={points.length >= 20}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
            ${points.length >= 20 
              ? 'bg-zinc-50 text-zinc-300 cursor-not-allowed' 
              : 'bg-zinc-800 text-white hover:bg-zinc-900 active:scale-95'}`}
        >
          <Plus className="w-4 h-4" />
          Add Point
        </button>
        
        <span className="text-xs font-bold text-zinc-400 uppercase tracking-tighter">
          {points.length} / 20 Points
        </span>
      </div>
    </div>
  );
}