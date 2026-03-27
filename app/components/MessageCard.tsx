import React from 'react';
import { AlertTriangle, AlertCircle, Info, LucideIcon } from 'lucide-react';

interface Props {
  variant: 'CAUTION' | 'WARNING' | 'INFO';
  title: string;
  message: string;
}

export default function MessageCard({ variant, title, message }: Props) {
  // Configuration for each state
  const configs: Record<string, { bg: string; border: string; text: string; iconColor: string; Icon: LucideIcon }> = {
    CAUTION: {
      bg: "bg-amber-50/50",
      border: "border-amber-200",
      text: "text-amber-900",
      iconColor: "text-amber-600",
      Icon: AlertTriangle,
    },
    WARNING: {
      bg: "bg-red-50/50",
      border: "border-red-200",
      text: "text-red-900",
      iconColor: "text-red-600",
      Icon: AlertCircle,
    },
    INFO: {
      bg: "bg-zinc-50/50",
      border: "border-zinc-200",
      text: "text-zinc-900",
      iconColor: "text-zinc-600",
      Icon: Info,
    },
  };

  const config = configs[variant];

  return (
    <div className={`w-full p-5 rounded-2xl border ${config.bg} ${config.border} flex gap-4 transition-all duration-300 shadow-sm mt-6`}>
      {/* Icon Circle */}
      <div className="shrink-0 w-10 h-10 rounded-full bg-white border border-inherit flex items-center justify-center shadow-sm">
        <config.Icon className={`w-5 h-5 ${config.iconColor}`} />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-1">
        <h4 className={`text-sm font-bold tracking-tight ${config.text}`}>
          {title}
        </h4>
        <p className={`text-sm leading-relaxed opacity-80 ${config.text}`}>
          {message}
        </p>
      </div>
    </div>
  );
}