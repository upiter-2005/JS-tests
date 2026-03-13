import { memoize } from "./17.memoize.ts";

describe("memoize", () => {
  test("should call memoize once", () => {
    const mockFn = jest.fn((x) => x * 2);

    const memoized = memoize(mockFn);
    memoized(5);
    memoized(5);
    memoized(5);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("should call memoize twice", () => {
    const mockFn = jest.fn((x) => x * 2);

    const memoized = memoize(mockFn);
    memoized(5);
    memoized(5);
    memoized(1);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
