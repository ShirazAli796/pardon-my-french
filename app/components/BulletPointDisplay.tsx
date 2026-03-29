import React from 'react';

interface Props {
  topic: string;
  points: string[];
}

export default function BulletPointDisplay({ topic, points }: Props) {
  // Filter out any empty points for a clean display
  const activePoints = points.filter(p => p.trim() !== "");

  return (
    <div className="w-full max-w-2xl py-3">
      {/* Topic Title */}
      <h2 className="text-2xl font-bold text-zinc-900 tracking-tight mb-6">
        {topic || "Untitled List"}
      </h2>

      {/* Bullet List */}
      <ul className="space-y-2">
        {activePoints.map((point, index) => (
          <li key={index} className="flex items-start gap-4 group">
            {/* Custom Modern Bullet */}
            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-800 flex-shrink-0" />
            
            {/* Point Text */}
            <p className="text-base text-zinc-600 leading-relaxed group-hover:text-zinc-900 transition-colors">
              {point}
            </p>
          </li>
        ))}
      </ul>

      {/* Empty State if no points exist */}
      {activePoints.length === 0 && (
        <p className="text-sm italic text-zinc-400">No points added to this list.</p>
      )}
    </div>
  );
}