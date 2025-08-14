import init, { convertImage } from "./wasm/imgconvert";

self.onmessage = async (e) => {
  const { bytes, src, dst, filename, settings } = e.data;
  await init();

  const cb = (p: number, m: string) => {
    (self as any).postMessage({ type: "progress", p, m });
  };

  const out = convertImage(bytes, src, dst, cb, settings || null);
  (self as any).postMessage(
    { type: "done", filename: filename, filetype: dst, out },
    [out.buffer],
  );
};
