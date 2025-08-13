import { useContext } from "react";
import { FileContext } from "./filecontext";

export function useFileContext() {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("useFileContext must be used within a FileContextProvider");
  }
  return context;
}
