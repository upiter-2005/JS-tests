import "./2.sayHi.ts";

describe("sayHi", () => {
  test("should concat text", () => {
    expect("someString".sayHi("Pavel")).toBe(
      "Hello from: Pavel - someString!!!",
    );
  });
});
