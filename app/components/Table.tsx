import React from 'react';

interface Column {
  header: string;
  accessor: string;
}

interface Props {
  columns: Column[];
  data: any[];
}

export default function ZincTable({ columns, data }: Props) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-zinc-50/80 border-b border-zinc-200">
          <tr>
            {columns.map((col) => (
              <th key={col.header} className="px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-zinc-50/50 transition-colors group">
              {columns.map((col) => (
                <td key={col.accessor} className="px-6 py-4 text-sm text-zinc-700 group-hover:text-zinc-900">
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}