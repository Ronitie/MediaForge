import { useState } from "react";
import { DownloadIcon } from "../../svgs/DownloadIcon";

type OutputImageCardProps = {
  imgSrc: string;
  filename: string;
};

export function OutputImageCard({ imgSrc, filename }: OutputImageCardProps) {
  const [imgFile, setImgFile] = useState<File | undefined>();
  async function blobToFile() {
    const res = await fetch(imgSrc);
    const blob = await res.blob();
    const imgFileName =
      (filename.slice(0, filename.lastIndexOf(".")) || filename) +
      "-converted." +
      blob.type.substring(6);

    return new File([blob], imgFileName, { type: blob.type });
  }

  (async () => {
    const file = await blobToFile();
    setImgFile(file);
  })();

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    );
  };
  return (
    <div className="flex items-center justify-between gap-2 p-2 border border-gray-300 bg-gray-100 rounded-lg">
      <div className="flex items-center gap-2 max-w-10/12">
        <div className="min-h-14 max-h-14 flex items-center rounded-md overflow-hidden">
          <img src={imgSrc} width={56} className="object-contain" />
        </div>
        <div className="overflow-hidden">
          <p className="font-semibold truncate">{imgFile?.name}</p>
          <p className="text-sm text-gray-600">
            <span>{imgFile?.type.substring(6)}</span>
            <span className="px-1">•</span>
            {formatFileSize(imgFile?.size || 0)}
          </p>
        </div>
      </div>
      <a
        href={imgSrc}
        download={filename}
        className="p-2 mr-1 hover:bg-gray-200 rounded-sm cursor-pointer"
      >
        <DownloadIcon />
      </a>
    </div>
  );
}
