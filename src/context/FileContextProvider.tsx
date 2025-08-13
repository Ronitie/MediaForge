import { useState, type ReactNode } from "react";
import { FileContext } from "./filecontext";

export function FileContextProvider({ children }: { children: ReactNode }) {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileContext.Provider value={{ files, setFiles }}>
      {children}
    </FileContext.Provider>
  );
}
