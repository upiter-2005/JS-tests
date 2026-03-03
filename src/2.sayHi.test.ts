import "./2.sayHi.ts";

describe("syaHi", () => {
  test("should string in param", () => {
    expect("someString".sayHi("Pavel")).toBe("Hello from: Pavel - someString");
  });
});
