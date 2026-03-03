import { promiseMyAll } from "./1.PromiseAll.ts";

describe("promiseAll", () => {
  test("should success all promises", async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
      Promise.resolve(4),
      Promise.resolve(5),
    ];

    const result = await promiseMyAll(promises);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  test("should check order", async () => {
    jest.useFakeTimers();

    const firstPromise = Promise.resolve(1);

    jest.advanceTimersByTime(1000);

    const secondPromise = Promise.resolve(2);

    const result = await promiseMyAll([firstPromise, secondPromise]);
    expect(result).toEqual([1, 2]);
  });

  test("should reject test", async () => {
    const promises = [
      Promise.resolve(1),
      Promise.reject(new Error("Promise rejected!")),
    ];
    expect(promiseMyAll(promises)).rejects.toThrow("Promise rejected!");
  });
});
