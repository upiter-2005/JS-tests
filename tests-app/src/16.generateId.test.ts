import { generateId } from "./16.generateId.ts";

describe("generateId", () => {
  test("should return 10 chars id", () => {
    const result = generateId(10);
    expect(result).toHaveLength(10);
  });

  test("should return id without argument", () => {
    const result = generateId();
    expect(result).toHaveLength(8);
  });
});
