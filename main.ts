import { renderNewsEntry } from './pipeline.ts';

function main(): void {
  const result = renderNewsEntry();
  console.log(
    `Rendered ${result.outputPath} (${result.width}x${result.height}, ${result.bytes} bytes) from ${result.sourcePath}`
  );
}

try {
  main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Failed to render news entry: ${message}`);
  process.exitCode = 1;
}
