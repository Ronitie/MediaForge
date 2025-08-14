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
      id: "image/jpeg",
    },
    {
      name: "format",
      label: "PNG",
      description: "Best for Graphics",
      id: "image/png",
    },
    {
      name: "format",
      label: "WebP",
      description: "efficient for web with better compression",
      id: "image/webp",
    },
    {
      name: "format",
      label: "tiff",
      description: "small description of the image format",
      id: "image/tiff",
    },
    {
      name: "format",
      label: "ico",
      description: "small description of the image format",
      id: "image/x-icon",
    },
    {
      name: "format",
      label: "BMP",
      description: "small description of the image format",
      id: "image/bmp",
    },
    {
      name: "format",
      label: "gif",
      description: "small description of the image format",
      id: "image/gif",
    },
    {
      name: "format",
      label: "EXR",
      description: "small description of the image format",
      id: "image/exr",
    },
    {
      name: "format",
      label: "HDR",
      description: "small description of the image format",
      id: "image/hdr",
    },
    {
      name: "format",
      label: "PNM",
      description: "small description of the image format",
      id: "image/pnm",
    },
    {
      name: "format",
      label: "TGA",
      description: "small description of the image format",
      id: "image/tga",
    },
    {
      name: "format",
      label: "qoi",
      description: "small description of the image format",
      id: "image/qoi",
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
