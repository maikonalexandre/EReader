import { ReactNode } from "react";
import { Navbar } from "../navbar";

export function Window({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
