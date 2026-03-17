export function memoize<T, U>(fn: T): (arg?: U) => U {
  let cache = null;
  let prevValue;

  return function (x) {
    if (!cache || prevValue !== x) {
      prevValue = x;
      cache = fn(x);
      console.log(`new call ${x}`);
    }
    return cache;
  };
}
