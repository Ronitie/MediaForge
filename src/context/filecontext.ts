import { createContext } from "react";

type FileContextType = {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

export const FileContext = createContext<FileContextType | undefined>(
  undefined,
);
