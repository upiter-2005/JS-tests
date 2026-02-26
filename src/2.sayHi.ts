declare module "string-module" {
  global {
    interface String {
      sayHi(value: string): string;
    }
  }
}

String.prototype.sayHi = function (value: string): string {
  return `Hello from:  ${value} `;
};

const str = "";
const res = str.sayHi("rtyrtyrtyrty");
console.log(res);
