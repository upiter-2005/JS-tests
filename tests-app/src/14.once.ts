export function once<T>(fn: (args: T[]) => T): (args: T) => T {
  let resultValue: T;
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      resultValue = fn(args);
      console.log("called");
    }
    return resultValue;
  };
}

// const init = once(() => console.log("Initialize func callback! "));
// init();
// init();
// init();
// init();
