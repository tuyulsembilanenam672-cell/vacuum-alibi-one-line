// vacuum-alibi-one-line: writes the robot vacuum's one-line excuse to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse, in the vacuum's own deadpan voice: its sensors named the dust
// bunny, and it does not evict tenants.
const ENTRY =
  "My sensors logged that spot as a dust bunny with a name, and I have a strict policy against evicting tenants.";
const points = [...ENTRY].length;
if (points < 1 || points > 200) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${points} code points to /output/entry.txt`);
