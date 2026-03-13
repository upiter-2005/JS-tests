import { mergeSortedArrays } from "./13.mergeSortedArrays.ts";

describe("mergeSortedArrays", () => {
  test("should merge 2 arrays", () => {
    const result = mergeSortedArrays([1, 37, 5], [2, 4, 6]);
    expect(result).toEqual([1, 2, 4, 5, 6, 37]);
  });

  test("should merge 2 arrays with not an array elements", () => {
    const result = mergeSortedArrays(
      () => {
        return [90, 91];
      },
      [1, 37, 5],
      "string",
      [2, 4, 6],
    );
    expect(result).toEqual([1, 2, 4, 5, 6, 37]);
  });

  test("should return empty array", () => {
    const result = mergeSortedArrays();
    expect(result).toEqual([]);
  });
});
