import { sum } from "./10.caringFunc.ts";

describe("sum", () => {
  test("should return 6", () => {
    const result = sum(1)(2)(3);
    expect(result).toBe(6);
  });
});
