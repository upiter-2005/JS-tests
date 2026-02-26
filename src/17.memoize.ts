function memoize<T, U>(fn: T): U {
  let cache = null;
  let prevValue;

  return function (x) {
    if (!cache || prevValue !== x) {
      prevValue = x;
      cache = fn.apply(this, x);
      console.log("new call");
    }
    return cache;
  };
}

const slowFunction = (x) => x * 2;

const memoized = memoize(slowFunction);

console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(2));
console.log(memoized(2));
console.log(memoized(3));
console.log(memoized(2));

function test<T, U>(args: T): Array<U> {
  return [args];
}

test([5, 6, 7]);
