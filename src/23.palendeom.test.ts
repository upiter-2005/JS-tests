import { isPalindrome } from "./23.palendrom.ts";

describe("isPalindrome", () => {
  test("should return true", () => {
    const result = isPalindrome("abcba");
    expect(result).toBe(true);
  });

  test("should return false", () => {
    const result = isPalindrome("abcde");
    expect(result).toBe(false);
  });
});
