type RadioProps = {
  label: string;
  description: string;
  id: string;
  selectedOption: string;
  onSelcectAction: (id: string) => void;
};

export function Radio({
  label,
  id,
  description,
  selectedOption,
  onSelcectAction,
}: RadioProps) {
  const isSeclected = id === selectedOption;

  const handleChange = () => {
    onSelcectAction(id);
  };

  return (
    <button
      onClick={handleChange}
      className={`flex gap-2 text-left border rounded-lg p-2
         ${isSeclected ? "border-pink-500 bg-red-500/10" : "border-gray-300"}
        `}
    >
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </button>
  );
}
