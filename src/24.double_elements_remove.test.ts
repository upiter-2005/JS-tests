import { removeDuplicates } from "./24.double_elements_remove.ts";

describe("removeDuplicates", () => {
  test("should return filtered array", () => {
    const arrArgument = [1, 2, 2, 3, 4, 4, 5, 3, 5, 8];
    const result = removeDuplicates(arrArgument);
    expect(result).toEqual([1, 2, 3, 4, 5, 8]);
  });

  test("should return empty array", () => {
    const arrArgument = [];
    const result = removeDuplicates(arrArgument);
    expect(result).toEqual([]);
  });

  // test("should return empty array if element type not number", () => {
  //   const arrArgument = [1, 2, 2, "string"];
  //   const result = removeDuplicates(arrArgument);
  //   expect(result).toEqual([]);
  // });
});
