import { ReactNode } from "react";
import { Navbar } from "../navbar";

export function Window({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="p-4">{children}</div>
    </div>
  );
}
