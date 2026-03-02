import { once } from "./14.once.ts";

describe("once testing", () => {
  test("call only once", () => {
    const mockFn = jest.fn((args?: number[]) => args[0] * 5);

    const onceReturnedFunc = once(mockFn);

    onceReturnedFunc(2);
    onceReturnedFunc(3);
    onceReturnedFunc(4);
    onceReturnedFunc(5);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
