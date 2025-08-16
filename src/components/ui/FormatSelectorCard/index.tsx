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
      description: "Best for Graphics, bigger in size",
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
      label: "avif",
      description: "Tiny web images, HDR, transparency",
      id: "image/avif",
    },
    {
      name: "format",
      label: "tiff",
      description: "for printing, publishing, and photography",
      id: "image/tiff",
    },
    {
      name: "format",
      label: "ico",
      description: "for windows app icon, website icon",
      id: "image/x-icon",
    },
    {
      name: "format",
      label: "BMP",
      description: "Simplicity, compatibility",
      id: "image/bmp",
    },
    {
      name: "format",
      label: "gif",
      description: "animated image",
      id: "image/gif",
    },
    {
      name: "format",
      label: "EXR",
      description: "HDR, film/VFX",
      id: "image/exr",
    },
    {
      name: "format",
      label: "HDR",
      description: "Environment lighting",
      id: "image/hdr",
    },
    {
      name: "format",
      label: "PNM",
      description: "Simple, debuggable",
      id: "image/pnm",
    },
    {
      name: "format",
      label: "TGA",
      description: "Old game textures",
      id: "image/tga",
    },
    {
      name: "format",
      label: "qoi",
      description: "Very fast, simple",
      id: "image/qoi",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(formatOptions[0].id);
  const [showAll, setShowAll] = useState(false);
  const visibleOptions = showAll ? formatOptions : formatOptions.slice(0, 6);
  const handleSelect = (id: string) => {
    setSelectedOption(id);
    onChangeAction(id);
  };

  return (
    <div className="mt-4 mb-4">
      <p className="font-semibold mb-2">Choose Format to convert:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {visibleOptions.map((item, index) => (
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
      <button
        onClick={() => setShowAll(!showAll)}
        className="text-blue-500 p-2"
      >
        {showAll ? "see less" : "show all formats"}
      </button>
    </div>
  );
}
