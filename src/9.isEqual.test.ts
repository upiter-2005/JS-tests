import "./9.isEqual.ts";

describe("isEqual test", () => {
  test("equal arrs", () => {
    const arr = [1, "2", 3, "4", true];
    expect(arr.isEqual([1, "2", 3, "4", true])).toBe(true);
  });

  test("different length arrs", () => {
    const arr = [1, "2", 3, "4", true];
    expect(arr.isEqual([1, "4", true])).toBe(false);
  });

  test("different elements", () => {
    const arr = [1, "2", 3, "4", true];
    expect(arr.isEqual([1, 2, 3, "4", true])).toBe(false);
  });
});
