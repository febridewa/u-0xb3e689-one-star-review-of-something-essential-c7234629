// One-Star Review of Something Essential — u-0xb3e689-one-star-review-of-something-essential-c7234629
// Writes one original deadpan one-star review of sleep to /output/entry.txt.
// The review: sleep takes eight hours a night, still leaves you tired, and
// expects you back again tonight like nothing happened. The sting lands in
// the last few words, after the complaint has been read straight.
// Deterministic: the same fixed string on every run.
// One line, 103 characters — inside the gate's 1–160 character window.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Eight hours of sleep and I still wake up tired. It expects me back again tonight like nothing happened.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
