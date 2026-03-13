/* eslint-disable @typescript-eslint/no-explicit-any */
import "./3.myBind.ts";

describe("myBindm", () => {
  test("should bind context correctly", () => {
    const spyFunc = jest.spyOn(console, "log").mockImplementation(() => {});
    const context = { a: 42 };

    function getVal() {
      console.log(this.a);
    }

    const bindedFunc = getVal.myBind(context);
    bindedFunc();
    expect(spyFunc).toHaveBeenNthCalledWith(1, 42);
  });
});
