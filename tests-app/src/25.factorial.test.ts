import { factorial } from "./25.factorial.ts";

describe("factorial", () => {
  test("should return 120 ", async () => {
    const result = factorial(5);
    expect(result).toBe(120);
  });

  test("should return 1 ", async () => {
    const result = factorial(0);
    expect(result).toBe(1);
  });

  test("should return null with -1 agr value", async () => {
    const result = factorial(-1);
    expect(result).toBe(null);
  });

  test("should return 1 with string arg", async () => {
    const result = factorial("hello");
    expect(result).toBe(1);
  });
});
