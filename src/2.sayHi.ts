String.prototype.sayHi = function (value: string): string {
  return `Hello from:  ${value} `;
};

const str = "";
const res = str.sayHi("rtyrtyrtyrty");
console.log(res);
