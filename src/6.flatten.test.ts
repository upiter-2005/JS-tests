import { flatten } from "./6.flatten.ts";

describe("flatten test", () => {
  test("empty array", () => {
    const arr = [];
    const result = flatten(arr);

    expect(result).toEqual([]);
  });

  test("flated array", () => {
    const arr = [1, 2, 3, 4];
    const result = flatten(arr);

    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("nested array", () => {
    const arr = [1, 2, [3, 4]];
    const result = flatten(arr);

    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("mixed array", () => {
    const arr = [5, ["hello", null], [true, [34]]];
    const result = flatten(arr);

    expect(result).toEqual([5, "hello", null, true, 34]);
  });
});
