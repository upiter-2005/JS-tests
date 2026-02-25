function once(fn){
  let resultValue;
  let called = false;
  return function(...args){
    if(!called){
      called = true
      resultValue = fn.apply(this, args)
    }
    return resultValue
  }
}

const init = once(() => console.log('Ініціалізація'));
init(); 
init(); 
init();
init();

