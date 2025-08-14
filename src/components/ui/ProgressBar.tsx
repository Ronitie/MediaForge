type ProgressBarProps = {
  completed: number;
};

export function ProgressBar({ completed }: ProgressBarProps) {
  return (
    <div className="h-4 w-full rounded-lg overflow-hidden bg-gray-300 my-3">
      <div
        className="h-full transition-width bg-gradient-to-r from-pink-600 to-red-500"
        style={{ width: completed + "%" }}
      ></div>
    </div>
  );
}
