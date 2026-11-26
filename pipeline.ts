import fs from 'node:fs';
import path from 'node:path';

const ENTRY_FILENAME = 'entry.png';
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

export interface RenderOptions {
  botDir?: string;
  outputDir?: string;
}

export interface RenderResult {
  sourcePath: string;
  outputPath: string;
  bytes: number;
  width: number;
  height: number;
}

export function renderNewsEntry(options: RenderOptions = {}): RenderResult {
  const botDir = options.botDir ?? process.env.MAKEFUN_BOT_DIR ?? import.meta.dirname;
  const outputDir = options.outputDir ?? process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

  const sourcePath = path.join(botDir, ENTRY_FILENAME);
  const outputPath = path.join(outputDir, ENTRY_FILENAME);

  const pngBytes = fs.readFileSync(sourcePath);
  if (pngBytes.byteLength < 24 || !pngBytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new Error(`Invalid PNG header in source asset: ${sourcePath}`);
  }
  if (pngBytes.subarray(12, 16).toString('ascii') !== 'IHDR') {
    throw new Error(`Missing PNG IHDR chunk in source asset: ${sourcePath}`);
  }

  const width = pngBytes.readUInt32BE(16);
  const height = pngBytes.readUInt32BE(20);

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputPath, pngBytes);

  return {
    sourcePath,
    outputPath,
    bytes: pngBytes.byteLength,
    width,
    height,
  };
}
