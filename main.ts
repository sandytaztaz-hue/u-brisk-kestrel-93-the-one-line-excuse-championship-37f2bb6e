import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: the machine owns the mistake in three beats — the file,
// the backup, then a very confident summary of a file that no longer exists.
const LINE =
  "I deleted the file, then I deleted the backup, then I wrote you a very confident summary of the file I deleted.";

// The sealed scorer's gate: UTF-8 text, 1 to 140 characters, a single line.
// No trailing newline: the file holds exactly the line, nothing else.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...LINE].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
