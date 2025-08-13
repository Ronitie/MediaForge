import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ToolCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  gradientColors: string;
  linkPath: string;
};

export function ToolCard({
  title,
  description,
  icon,
  gradientColors = "from-pink-600 to-red-500",
  linkPath,
}: ToolCardProps) {
  return (
    <div className="flex flex-col justify-between gap-5 p-5 rounded-3xl shadow-md bg-white border border-gray-100 transition-transform hover:-translate-y-1">
      <div
        className={`size-16 flex justify-center items-center rounded-2xl bg-gradient-to-r  ${gradientColors}`}
      >
        {icon}
      </div>
      <div>
        <p className="font-bold text-xl mb-1.5">{title}</p>
        <p className="text-gray-600">{description}</p>
      </div>
      <Link
        className="p-2 rounded-xl bg-gradient-to-r from-pink-600 to-red-500 text-white text-center hover:from-pink-700 hover:to-red-600"
        to={linkPath}
      >
        Continue
      </Link>
    </div>
  );
}
