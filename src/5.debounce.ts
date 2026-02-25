// 1. старый таймер очищается (clearTimeout)
// 2. создаётся новый таймер на delay миллисекунд
// 3. return fn
// 3. fn.apply(this, args)

function myDebounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
}

const handleInput = myDebounce(function (val) {
  console.log("searching!!! - " + val);
}, 2000);

const el = document.querySelector("#myEl");
el.addEventListener("input", (e) => handleInput(e.target.value, this));
