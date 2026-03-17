import { once } from "./14.once.ts";

describe("once testing", () => {
  test("should call only once", () => {
    const mockFn = jest.fn((args?: number[]) => args[0] * 5);

    const onceReturnedFunc = once(mockFn);

    onceReturnedFunc(2);
    onceReturnedFunc(3);
    onceReturnedFunc(4);
    onceReturnedFunc(5);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("should return the same value", () => {
    const mockFn = jest.fn((args?: number[]) => args[0] * 5);

    const onceReturnedFunc = once(mockFn);

    const firstCall = onceReturnedFunc(2);
    const secondCall = onceReturnedFunc(3);

    expect(firstCall).toBe(secondCall);
  });
});
