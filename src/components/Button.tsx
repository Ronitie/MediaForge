import type { ReactNode } from "react";
import { Loader } from "./ui/Loader";

type ButtonProps = {
  children: ReactNode;
  size: "sm" | "md" | "lg";
  loading: boolean;
  onPress: () => void;
};

export function Button({ children, size, onPress, loading }: ButtonProps) {
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
      disabled={loading}
      className={`w-full rounded-xl ${padding()}
        px-3 text-white text-lg font-semibold cursor-pointer transition-colors bg-gradient-to-r
        ${loading ? "bg-gray-400" : "from-pink-600 to-red-500 hover:from-pink-700 hover:to-red-600"}`}
    >
      {loading ? <Loader /> : children}
    </button>
  );
}
