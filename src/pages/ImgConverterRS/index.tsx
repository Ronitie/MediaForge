"use client";

import { Button } from "../../components/Button";
import { FormatSelectorCard } from "../../components/ui/FormatSelectorCard";
import { ImageIcon } from "../../svgs/MediaIcons";
import { UploadCard } from "../../components/ui/UploadCard";
import { useEffect, useRef, useState } from "react";
import { useFileContext } from "../../context/useFileContext";
import { OutputImageCard } from "../../components/ui/OutputImageCard";
import { ProgressBar } from "../../components/ui/ProgressBar";

type OutputImageDataType = {
  filename: string;
  type: string;
  url: string;
};

export default function ImageConverterPageRS() {
  const { files } = useFileContext();
  const workerRef = useRef<Worker | null>(null);
  const [selectedOption, setSelectedOption] = useState("image/jpeg");
  const [outputImageData, setOutputImageData] = useState<OutputImageDataType[]>(
    [],
  );
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState({
    total: 0,
    completed: 0,
  });

  useEffect(() => {
    workerRef.current = new Worker(
      new URL("../../../workers/imgConvertWorker", import.meta.url),
      { type: "module" },
    );
    workerRef.current.onmessage = (e) => {
      const { type, filename, filetype, p, m, out } = e.data;
      if (type === "progress") {
        setProgress({ total: 10, completed: p });
        console.log(`Progress: ${m}`);
      }
      if (type === "done") {
        const blob = new Blob([out], { type: selectedOption });
        const url = URL.createObjectURL(blob);
        setOutputImageData((prev) => [
          ...prev,
          { filename, type: filetype, url },
        ]);
      }
    };
    return () => workerRef.current?.terminate();
  }, []);

  useEffect(() => {
    return () => {
      outputImageData.forEach((item) => URL.revokeObjectURL(item.url));
    };
  }, [outputImageData]);

  const handleConvertFiles = async () => {
    setLoading(true);
    for (const file of files) {
      const filename = file.name;
      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const srcType = file.type;
      const targetType = selectedOption;

      workerRef.current?.postMessage({
        bytes: uint8Array,
        filename: filename,
        src: srcType,
        dst: targetType,
        settings: null,
      });
    }
    setLoading(false);
  };

  return (
    <div className="container max-w-3xl mx-auto p-4">
      {/* Title section */}
      <section className="mb-6">
        <div className="flex justify-center gap-3">
          <div>
            <div className="size-16 flex justify-center items-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500">
              <ImageIcon />
            </div>
          </div>
          <div>
            <h1 className="text-3xl mb-1 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Image Converter
            </h1>
            <p className="text-gray-600">
              Convert between JPEG, PNG, WebP, AVIF, HEIC and more formats
              locally in your browser and almost instantly
            </p>
          </div>
        </div>
      </section>

      <UploadCard />
      <FormatSelectorCard onChangeAction={(id) => setSelectedOption(id)} />
      <p className="mb-3 text-sm text-gray-500">
        <span className="font-medium">Note:</span> Larger images may take longer
        time to process depending on your device power
      </p>
      <Button size="lg" onPress={handleConvertFiles} loading={loading}>
        Convert
      </Button>
      {loading && <ProgressBar completed={progress.completed} />}
      <div className="flex flex-col gap-2 mt-2">
        {outputImageData.map((item, index) => (
          <OutputImageCard
            key={index}
            imgSrc={item.url}
            filename={item.filename}
            filetype={item.type}
          />
        ))}
      </div>
    </div>
  );
}
