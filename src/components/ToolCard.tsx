import type { ReactNode } from "react";

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
      <a
        className="p-2 rounded-xl bg-gray-800 text-gray-100 text-center hover:bg-gray-900"
        href={linkPath}
      >
        Continue
      </a>
    </div>
  );
}
