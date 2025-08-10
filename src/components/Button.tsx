import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  size: "sm" | "md" | "lg";
};

export function Button({ children, size }: ButtonProps) {
  const padding = () => {
    switch (size) {
      case "sm":
        return "p-1";
      case "md":
        return "p-2";
      case "lg":
        return "p-3";
      default:
        return "p-2";
    }
  };
  return (
    <button
      className={`rounded-lg ${padding()} px-3 text-white font-medium cursor-pointer transition-colors bg-gradient-to-r from-pink-600 to-red-500 hover:from-pink-700 hover:to-red-600`}
    >
      {children}
    </button>
  );
}
