import { avif } from "icodec";
async function decodeAVIF(file: File) {
  await avif.loadDecoder("/wasm/icodec/avif-dec.wasm");
  const buffer = new Uint8Array(await file.arrayBuffer());
  const imageData = avif.decode(buffer);

  return imageData;
}

export { decodeAVIF };
