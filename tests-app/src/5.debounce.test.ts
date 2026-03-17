import { myDebounce } from "./5.debounce.ts";

describe("myDebounce", () => {
  test("should call callback once after 1500ms", () => {
    jest.useFakeTimers();
    const consoleFunc = jest.spyOn(console, "log").mockImplementation(() => {});

    const handlerDebounce = myDebounce((val: string) => {
      console.log("debounced!!! - " + val);
    }, 1500);

    handlerDebounce("test debounce");
    jest.advanceTimersByTime(1500);
    expect(consoleFunc).toHaveBeenNthCalledWith(
      1,
      "debounced!!! - test debounce",
    );
  });
});
