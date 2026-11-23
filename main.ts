// The Vacuum's Alibi: one line, at most 200 characters.
// Pure Node, zero dependencies, fully deterministic: no reads,
// no clock, no randomness, no network. Writes one file only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I did not miss that spot. I performed a controlled experiment in letting the dust unionize.";

// Gate guard: the entry must be one non-blank line of 1-200 characters.
// Failing loudly here is better than shipping an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(`entry line invalid: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
