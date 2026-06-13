import { describe, expect, it } from "vitest";
import { greet } from "../src/index.js";

describe("greet", () => {
  it("greets the world by default", () => {
    expect(greet()).toBe("Hello, world!");
  });

  it("greets a given name", () => {
    expect(greet({ name: "printemps" })).toBe("Hello, printemps!");
  });
});
