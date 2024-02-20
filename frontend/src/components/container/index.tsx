import { ReactNode } from "react";
import { Frame } from "../frame";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div>
      <Frame />
      <div className="p-4">{children}</div>
    </div>
  );
}
