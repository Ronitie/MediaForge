import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  size: "sm" | "md" | "lg";
  onPress: () => void;
};

export function Button({ children, size, onPress }: ButtonProps) {
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
      onClick={onPress}
      className={`w-full rounded-xl ${padding()} px-3 text-white text-lg font-semibold cursor-pointer transition-colors bg-gradient-to-r from-pink-600 to-red-500 hover:from-pink-700 hover:to-red-600`}
    >
      {children}
    </button>
  );
}
