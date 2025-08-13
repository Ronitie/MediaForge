import { useState } from "react";
import { Radio } from "./Radio";

type FormatSelectorCardProps = {
  onChangeAction: (id: string) => void;
};

export function FormatSelectorCard({
  onChangeAction,
}: FormatSelectorCardProps) {
  const formatOptions = [
    {
      name: "format",
      label: "JPG",
      description: "Best for photos, widely supported",
      id: "jpeg",
    },
    {
      name: "format",
      label: "PNG",
      description: "Best for Graphics",
      id: "png",
    },
    {
      name: "format",
      label: "WebP",
      description: "efficient for web with better compression",
      id: "webp",
    },
    {
      name: "format",
      label: "AVIF",
      description: "modern, highly compressed image",
      id: "avif",
    },
    {
      name: "format",
      label: "heic",
      description: "High Efficiency Image Container, by Apple",
      id: "heic",
    },
    {
      name: "format",
      label: "jxl",
      description: "modern successor of jpeg",
      id: "jxl",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(formatOptions[0].id);
  const handleSelect = (id: string) => {
    setSelectedOption(id);
    onChangeAction(id);
  };

  return (
    <div className="mt-4 mb-4">
      <p className="font-semibold mb-2">Choose Format to convert:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {formatOptions.map((item, index) => (
          <Radio
            key={index}
            label={item.label}
            description={item.description}
            id={item.id}
            selectedOption={selectedOption}
            onSelcectAction={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}
