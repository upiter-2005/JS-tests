function memoize(fn){
  let cache = null;
  let prevVal;

  return function(x){
    if(!cache || prevVal !== x  ){
      prevVal = x
      cache = fn.apply(this,x)
      console.log("new call");
    }
    return cache;
  }
}

const slowFunction = (x) => x * 2;
const memoized = memoize(slowFunction);

console.log(memoized(5));// обчислює і кешує результат
console.log(memoized(5));// повертає кешований результат
console.log(memoized(5));// повертає кешований результат
console.log(memoized(5));// повертає кешований результат
console.log(memoized(5));// повертає кешований результат
console.log(memoized(5));// повертає кешований результат
console.log(memoized(2));// повертає кешований результат
console.log(memoized(2));// повертає кешований результат
console.log(memoized(3));// повертає кешований результат
console.log(memoized(2));// повертає кешований результат