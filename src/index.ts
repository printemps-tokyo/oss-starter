/**
 * Library entry point.
 * Re-export the public API of your tool here so it can be consumed both
 * programmatically (import) and via the CLI (src/cli.ts).
 */

export interface GreetOptions {
  /** Name to greet. Defaults to "world". */
  name?: string;
}

/**
 * Sample function. Replace with your tool's real logic.
 */
export function greet({ name = "world" }: GreetOptions = {}): string {
  return `Hello, ${name}!`;
}
