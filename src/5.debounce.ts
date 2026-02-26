function myDebounce<T extends string>(fn: (args: T) => void, delay: number) {
  let timerId: number;

  return function (args: T): void {
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      fn(args);
    }, delay);
  };
}

const handleInput = myDebounce((val: string) => {
  console.log("searching!!! - " + val);
}, 2000);

const el = document.querySelector<HTMLInputElement>("#myEl");
el?.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement;
  handleInput(target.value);
});
