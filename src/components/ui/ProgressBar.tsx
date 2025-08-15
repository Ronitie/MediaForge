import { useEffect, useState } from "react";

type ProgressBarProps = {
  total: number;
  completed: number;
};

export function ProgressBar({ total, completed }: ProgressBarProps) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth((completed / total) * 100);
  }, [total, completed]);
  return (
    <div className="h-4 w-full rounded-lg overflow-hidden bg-gray-300 my-3">
      <div
        className="h-full transition-width bg-gradient-to-r from-pink-600 to-red-500"
        style={{ width: width + "%" }}
      ></div>
    </div>
  );
}
