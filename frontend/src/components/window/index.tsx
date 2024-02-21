import { ReactNode } from "react";
import { Navbar } from "../navbar";

export function Window({ children }: { children: ReactNode }) {
  return (
    <div className="bg-zin-700">
      <Navbar />
      <div className="h-[41rem]">{children}</div>
    </div>
  );
}
