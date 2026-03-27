import React from "react";

type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface Props {
  children: React.ReactNode;
  margin: Spacing;
  padding: Spacing;
}

export default function Container({ children, margin, padding }: Props) {
  return <div className={`m-${margin} p-${padding}`}>{children}</div>;
}
