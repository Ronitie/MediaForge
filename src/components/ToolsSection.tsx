import { CompressIcon, ImageIcon, PdfIcon } from "../svgs/MediaIcons";
import { ToolCard } from "./ToolCard";

export function ToolsSection() {
  const tools = [
    {
      title: "Image Converter",
      description:
        "Convert between PNG, JPG, WebP, AVIF and more formats almost instantly",
      icon: <ImageIcon />,
      gradientColors: "from-green-500 to-emerald-500",
      linkPath: "/image-converter",
    },

    {
      title: "Image Compressor/Resizer",
      description: "Reduce Image size or resize it to your needs",
      icon: <CompressIcon />,
      gradientColors: "from-purple-500 to-violet-500",
      linkPath: "/image-resizer",
    },

    {
      title: "PDF compressor",
      description:
        "Compress PDF files to reduce size without losing readability",
      icon: <PdfIcon />,
      gradientColors: "from-orange-500 to-red-500",
      linkPath: "/pdf-compressor",
    },
  ];

  return (
    <div id="tools-section" className="container mx-auto p-5 scroll-mt-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          On device Media Tools
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to process, convert, and optimize your media files
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((item, index) => (
          <ToolCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            gradientColors={item.gradientColors}
            linkPath={item.linkPath}
          />
        ))}
      </div>
    </div>
  );
}
