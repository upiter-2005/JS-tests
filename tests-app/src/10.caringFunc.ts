export function sum(a: number) {
  return function (b: number) {
    return function (c: number): number {
      return a + b + c;
    };
  };
}
