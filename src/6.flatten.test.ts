import { flatten } from "./6.flatten.ts";

describe("flatten", () => {
  test("should handle empty array", () => {
    const arr = [];
    const result = flatten(arr);

    expect(result).toEqual([]);
  });

  test("should handle flated array", () => {
    const arr = [1, 2, 3, 4];
    const result = flatten(arr);

    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("should handle nested array with order", () => {
    const arr = [1, [55, 90, [334]], 2, [3, 4]];
    const result = flatten(arr);

    expect(result).toEqual([1, 55, 90, 334, 2, 3, 4]);
  });

  test("should handle mixed array", () => {
    const arr = [5, ["hello", null], [true, [34]]];
    const result = flatten(arr);

    expect(result).toEqual([5, "hello", null, true, 34]);
  });
});
