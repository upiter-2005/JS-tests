export function factorial(n: number | string): number | null {
  if (typeof n === "number") {
    if (n < 0) return null;
    if (n === 0) return 1;

    const result = factorial(n - 1);
    if (result === null) return null;
    return n * result;
  } else {
    return 1;
  }
}

console.log(factorial(1));
