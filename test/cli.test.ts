import { readFileSync } from "node:fs";
import { afterEach, describe, expect, it, vi } from "vitest";
import { main, readVersion } from "../src/cli.js";

const pkg = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf8"),
) as { version: string };

function captureStdout(): string[] {
  const chunks: string[] = [];
  vi.spyOn(process.stdout, "write").mockImplementation((chunk) => {
    chunks.push(String(chunk));
    return true;
  });
  return chunks;
}

function captureStderr(): string[] {
  const chunks: string[] = [];
  vi.spyOn(process.stderr, "write").mockImplementation((chunk) => {
    chunks.push(String(chunk));
    return true;
  });
  return chunks;
}

afterEach(() => {
  vi.restoreAllMocks();
  process.exitCode = 0;
});

describe("readVersion", () => {
  it("returns the version from package.json", () => {
    expect(readVersion()).toBe(pkg.version);
  });
});

describe("main", () => {
  it("prints the version for --version", () => {
    const chunks = captureStdout();
    main(["node", "cli", "--version"]);
    expect(chunks.join("")).toBe(pkg.version + "\n");
  });

  it("prints the version for -v anywhere in argv", () => {
    const chunks = captureStdout();
    main(["node", "cli", "printemps", "-v"]);
    expect(chunks.join("")).toBe(pkg.version + "\n");
  });

  it("greets when no version flag is given", () => {
    const chunks = captureStdout();
    main(["node", "cli", "printemps"]);
    expect(chunks.join("")).toBe("Hello, printemps!\n");
  });

  it("rejects an unknown flag with an error and a --help hint, exit 1", () => {
    captureStdout();
    const errChunks = captureStderr();
    main(["node", "cli", "--definitely-not-a-real-flag"]);
    expect(process.exitCode).toBe(1);
    const err = errChunks.join("");
    expect(err).toContain("error:");
    expect(err).toContain("--help");
  });
});
