// news-image-20261123 entry (Node 22, standard library only).
// The image is the entry.png beside this file; the program copies it to
// the output directory as /output/entry.png. Deterministic: no network,
// no randomness, no timestamps, same bytes on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
// Guard against a truncated copy: the output must be byte-for-byte the source.
if (statSync(src).size !== statSync(dest).size) {
  throw new Error('entry.png copy size mismatch');
}
