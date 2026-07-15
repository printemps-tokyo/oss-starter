#!/usr/bin/env node
import { readFileSync, realpathSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { greet } from "./index.js";

/**
 * Minimal zero-dependency CLI.
 * Swap in a parser (e.g. citty / commander) once arguments grow.
 */

/**
 * Read the package version from the adjacent package.json.
 * Falls back to "0.0.0" if the file cannot be read.
 */
export function readVersion(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  try {
    const raw = readFileSync(join(here, "..", "package.json"), "utf8");
    return (JSON.parse(raw) as { version: string }).version;
  } catch {
    return "0.0.0";
  }
}

export function main(argv: string[]): void {
  const args = argv.slice(2);

  if (args.includes("-h") || args.includes("--help")) {
    process.stdout.write(
      [
        "Usage: oss-starter [name]",
        "",
        "Options:",
        "  -h, --help     Show this help",
        "  -v, --version  Show version",
        "",
      ].join("\n"),
    );
    return;
  }

  if (args.includes("-v") || args.includes("--version")) {
    process.stdout.write(readVersion() + "\n");
    return;
  }

  // The only recognized flags are handled above, so any remaining token that
  // looks like an option is unknown. Reject it with a pointer to --help
  // instead of silently ignoring it.
  const unknown = args.find((a) => a.startsWith("-"));
  if (unknown !== undefined) {
    process.stderr.write(`error: unknown option '${unknown}'\n`);
    process.stderr.write("run 'oss-starter --help' for usage.\n");
    process.exitCode = 1;
    return;
  }

  const name = args.find((a) => !a.startsWith("-"));
  process.stdout.write(greet({ name }) + "\n");
}

// Run only when executed as a script (e.g. `node dist/cli.js`),
// not when imported from tests.
function invokedAsScript(): boolean {
  if (process.argv[1] === undefined) return false;
  try {
    return import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href;
  } catch {
    // argv[1] may not resolve to a real file (bundlers, deleted paths,
    // single-executable builds); treat that as not being run directly.
    return false;
  }
}

if (invokedAsScript()) {
  main(process.argv);
}
