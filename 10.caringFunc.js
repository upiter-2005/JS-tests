
function sum (a) {
  return function (b) {
    return function(c) {
      return a + b + c;
    }
  }
}
console.log(sum(1)(2)(3))


////////////-----------Advanced level---------------///////////////////////
// function sum(a){
//   let total = 0;

//   function inner(b){
//     if(b !== undefined){
//       total += b;
//       return inner;
//     }
//     return total;
//   }
//    inner.valueOf = () => total;
//    inner.toString = () => String(total);
//   return inner;
// }
// console.log(+sum(1)(2)(3))

// function foo (){
//   return 777;
// }

// foo.valueOf = () => 3131

// console.log(foo());