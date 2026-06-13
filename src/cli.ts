#!/usr/bin/env node
import { greet } from "./index.js";

/**
 * Minimal zero-dependency CLI.
 * Swap in a parser (e.g. citty / commander) once arguments grow.
 */
function main(argv: string[]): void {
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

  const name = args.find((a) => !a.startsWith("-"));
  process.stdout.write(greet({ name }) + "\n");
}

main(process.argv);
