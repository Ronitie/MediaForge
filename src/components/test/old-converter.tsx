// "use client";

// import { Button } from "../../components/Button";
// import { FormatSelectorCard } from "../../components/ui/FormatSelectorCard";
// import { ImageIcon } from "../../svgs/MediaIcons";
// import { UploadCard } from "../../components/ui/UploadCard";
// import { useState } from "react";
// import { useFileContext } from "../../context/useFileContext";
// import { avif, heic, jpeg, jxl, png, webp, type ICodecModule } from "icodec";
// import { OutputImageCard } from "../../components/ui/OutputImageCard";
// import { ProgressBar } from "../../components/ui/ProgressBar";

// type OutputImageDataType = {
//   filename: string;
//   url: string;
// };

// export default function ImageConverterPage() {
//   const [selectedOption, setSelectedOption] = useState("jpeg");
//   const [outputImageData, setOutputImageData] = useState<OutputImageDataType[]>(
//     [],
//   );
//   const [loading, setLoading] = useState(false);
//   const [progress, setProgress] = useState({
//     total: 0,
//     completed: 0,
//   });
//   const { files } = useFileContext();
//   const decoderWasmPath = new Map();
//   const encoderWasmPath = new Map();
//   const codecLoader = new Map<string, ICodecModule | any>();

//   //decoder wasm paths
//   decoderWasmPath.set("jpeg", "/wasm/icodec/mozjpeg.wasm");
//   decoderWasmPath.set("png", "/wasm/icodec/pngquant_bg.wasm");
//   decoderWasmPath.set("webp", "/wasm/icodec/webp-dec.wasm");
//   decoderWasmPath.set("avif", "/wasm/icodec/avif-dec.wasm");
//   decoderWasmPath.set("heic", "/wasm/icodec/heic-dec.wasm");
//   decoderWasmPath.set("jxl", "/wasm/icodec/jxl-dec.wasm");

//   //encoder wasm paths
//   encoderWasmPath.set("jpeg", "/wasm/icodec/mozjpeg.wasm");
//   encoderWasmPath.set("png", "/wasm/icodec/pngquant_bg.wasm");
//   encoderWasmPath.set("webp", "/wasm/icodec/webp-enc.wasm");
//   encoderWasmPath.set("avif", "/wasm/icodec/avif-enc.wasm");
//   encoderWasmPath.set("heic", "/wasm/icodec/heic-enc.wasm");
//   encoderWasmPath.set("jxl", "/wasm/icodec/jxl-enc.wasm");

//   //codec loader maps
//   codecLoader.set("jpeg", jpeg);
//   codecLoader.set("png", png);
//   codecLoader.set("webp", webp);
//   codecLoader.set("avif", avif);
//   codecLoader.set("heic", heic);
//   codecLoader.set("jxl", jxl);

//   async function convertImageFile(file: File, codec: ICodecModule) {
//     //const inputImageFormat = file.type.substring(6);
//     const decoder = codecLoader.get("jpeg");

//     await decoder?.loadDecoder(decoderWasmPath.get("jpeg"));
//     await codec.loadEncoder(encoderWasmPath.get("png"));

//     const data = new Uint8Array(await file.arrayBuffer());

//     const imageData = decoder!.decode(data);
//     const imageDataLike = {
//       width: imageData.width,
//       height: imageData.height,
//       data: imageData.data,
//       depth: (imageData as any).depth ?? 8,
//     };
//     const encodedImageData = codec.encode(imageDataLike);
//     const arrayBuffer = new Uint8Array(
//       encodedImageData.buffer.slice(
//         encodedImageData.byteOffset,
//         encodedImageData.byteOffset + encodedImageData.byteLength,
//       ),
//     ) as Uint8Array<ArrayBuffer>;

//     const blob = new Blob([arrayBuffer], { type: codec.mimeType });
//     const url = URL.createObjectURL(blob);
//     return url;
//   }

//   const handleConvertFiles = async () => {
//     setLoading(true);
//     const total = files.length;
//     let completed = 0;
//     setProgress({ total: total, completed: 0 });
//     for (const file of files) {
//       try {
//         const url = await convertImageFile(file, png);
//         setOutputImageData((prev) => [
//           ...prev,
//           { filename: file.name, url: url },
//         ]);
//         completed++;
//         setProgress({ total: total, completed: completed });
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     setLoading(false);
//     //setOutputImageData(convertedImgData);
//   };

//   return (
//     <div className="container max-w-3xl mx-auto p-4">
//       {/* Title section */}
//       <section className="mb-6">
//         <div className="flex justify-center gap-3">
//           <div>
//             <div className="size-16 flex justify-center items-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500">
//               <ImageIcon />
//             </div>
//           </div>
//           <div>
//             <h1 className="text-3xl mb-1 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
//               Image Converter
//             </h1>
//             <p className="text-gray-600">
//               Convert between JPEG, PNG, WebP, AVIF, HEIC and more formats
//               locally in your browser and almost instantly
//             </p>
//           </div>
//         </div>
//       </section>

//       <UploadCard />
//       <FormatSelectorCard onChangeAction={(id) => setSelectedOption(id)} />
//       <p className="mb-3 text-sm text-gray-500">
//         <span className="font-medium">Note:</span> Larger images may take longer
//         time to process depending on your device power
//       </p>
//       <Button size="lg" onPress={handleConvertFiles} loading={loading}>
//         Convert
//       </Button>
//       {loading && (
//         <ProgressBar total={files.length} completed={progress.completed} />
//       )}
//       <div className="flex flex-col gap-2 mt-2">
//         {outputImageData.map((item, index) => (
//           <OutputImageCard
//             key={index}
//             imgSrc={item.url}
//             filename={item.filename}
//             filetype="image/png"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
