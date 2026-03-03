import { doSmth } from "./4.sleep.ts";

describe("sleep", () => {
  test("should check execution order ", async () => {
    jest.useFakeTimers();

    const consoleFunc = jest.spyOn(console, "log").mockImplementation(() => {});
    const promise = doSmth();

    expect(consoleFunc).toHaveBeenNthCalledWith(1, 1);
    jest.advanceTimersByTime(2500);
    await promise;
    expect(consoleFunc).toHaveBeenNthCalledWith(2, 3);
  });
});
