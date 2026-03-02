import "./2.sayHi.ts";

describe("syaHi test function from String prototype", () => {
  test("string in param", () => {
    expect("someString".sayHi("Pavel")).toBe("Hello from: Pavel - someString");
  });
});
