import { useCallback, useState } from "react";
import { useFileContext } from "../../context/useFileContext";
import { ImageSolidIcon } from "../../svgs/MediaIcons";
import { UploadIcon } from "../../svgs/UploadIcon";
import { TrashIcon } from "../../svgs/TrashIcon";
import { createImagePreview } from "../../helpers/createImgPreview";

export function UploadCard() {
  const { files, setFiles } = useFileContext();
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragover" || e.type === "dragenter") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedImages = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/"),
    );
    setFiles([...files, ...droppedImages]);
    const previews = await Promise.all(
      droppedImages.map((file) => createImagePreview(file)),
    );

    setPreviewUrls((prev) => [...prev, ...previews]);
  }, []);

  const handleChooseImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).filter((file) =>
        file.type.startsWith("image/"),
      );
      setFiles([...files, ...selectedFiles]);
      const previews = await Promise.all(
        selectedFiles.map((file) => createImagePreview(file)),
      );

      setPreviewUrls((prev) => [...prev, ...previews]);
    }
  };

  const handleRemove = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    URL.revokeObjectURL(previewUrls[index]);
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    );
  };

  const handleClearAll = () => {
    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    setFiles([]);
    setPreviewUrls([]);
  };

  return (
    <>
      <label
        htmlFor="file-input"
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className={`w-full h-80 flex flex-col gap-2 justify-center items-center border-dashed border-2 rounded-2xl ${isDragging ? "border-red-500 bg-red-500/10" : "border-gray-300"}`}
      >
        <input
          type="file"
          accept="image/*"
          multiple
          id="file-input"
          onChange={handleChooseImage}
          hidden
        />
        <ImageSolidIcon />
        <p className="text-lg font-semibold">Drag and drop images here.</p>
        <p>Or,</p>
        <div className="flex gap-2 items-center justify-center py-2 px-4 shadow rounded-lg bg-gray-800 text-white cursor-pointer">
          <UploadIcon />
          Choose Images
        </div>
      </label>

      {files.length > 0 && (
        <section className="mt-3">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold">Selected Images ({files.length})</p>
            <button
              onClick={handleClearAll}
              className="flex gap-2 items-center px-2 py-1 rounded-lg border border-gray-200 hover:bg-gray-100"
            >
              <TrashIcon />
              clear all
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-2 p-2 border border-gray-300 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-2 max-w-10/12">
                  <div className="size-14 flex items-center rounded-md overflow-hidden">
                    <img
                      src={previewUrls[index]}
                      className="size-14 object-cover"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-semibold truncate">{file.name}</p>
                    <p className="text-sm text-gray-600">
                      <span>{file.type.substring(6)}</span>
                      <span className="px-1">•</span>
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className="p-2 mr-1 hover:bg-gray-200 rounded-sm cursor-pointer"
                >
                  <TrashIcon />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
