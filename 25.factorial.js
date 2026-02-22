function factorial(n){
  if(n < 0) return null;
  if(n === 0) return 1
  //let res = 1;
  // for(let i = 1; i <= n; i++){
  //   res *= i
  // }
  return n * factorial(n - 1)
}

console.log(factorial(1)); // 120