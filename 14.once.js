function once(fn){
  let resultVal;
  let called = false;
  return function(...args){
    if(!called){
      called = true
      resultVal = fn.apply(this, args)
    }
      return resultVal
  }
}

const init = once(() => console.log('Ініціалізація'));
init(); // "Ініціалізація"
init(); // нічого не відбувається
init();
init();

