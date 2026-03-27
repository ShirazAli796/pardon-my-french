import React, { useState, useRef } from 'react';
import { UploadCloud, File, X } from 'lucide-react';

interface Props {
  label: string;
  onFileSelect: (file: File | null) => void;
  accept?: string;
}

export default function FileUploader({ label, onFileSelect, accept }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (selectedFile: File) => {
    setFile(selectedFile);
    onFileSelect(selectedFile);
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    onFileSelect(null);
  };

  return (
    <div className="w-full flex flex-col gap-1.5 mt-6">
      <label className="text-sm font-medium text-zinc-600 ml-1 mb-1">
        {label}
      </label>

      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
        }}
        onClick={() => fileInputRef.current?.click()}
        className={`
          relative w-full min-h-40 rounded-xl border-2 border-dashed flex flex-col items-center justify-center p-6 cursor-pointer transition-all duration-200
          ${isDragging 
            ? 'border-zinc-800 bg-zinc-100 ring-4 ring-zinc-800/5' 
            : 'border-zinc-200 bg-zinc-50/50 hover:border-zinc-300 hover:bg-zinc-50'}
        `}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          className="hidden" 
          accept={accept}
        />

        {!file ? (
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-3 shadow-sm">
              <UploadCloud className="w-6 h-6 text-zinc-500" />
            </div>
            <p className="text-sm font-medium text-zinc-900">
              Click to upload <span className="text-zinc-500">or drag and drop</span>
            </p>
            <p className="text-xs text-zinc-400 mt-1">
              SVG, PNG, JPG or GIF (max. 10MB)
            </p>
          </div>
        ) : (
          <div className="w-full flex items-center justify-between p-3 bg-white border border-zinc-200 rounded-lg animate-in fade-in zoom-in-95">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-zinc-100 flex items-center justify-center text-zinc-600">
                <File className="w-5 h-5" />
              </div>
              <div className="flex flex-col max-w-50">
                <span className="text-sm font-medium text-zinc-900 truncate">{file.name}</span>
                <span className="text-xs text-zinc-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
              </div>
            </div>
            <button 
              onClick={removeFile}
              className="p-1.5 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}