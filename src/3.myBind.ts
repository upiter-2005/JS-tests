/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Function {
    myBind(context: any): (...args: any[]) => void | any;
  }
}

Function.prototype.myBind = function (context) {
  return (...args) => {
    this.apply(context, args);
  };
};

function foo() {
  console.log(`foo console.log ` + this.a);
}

const foo1 = foo.myBind({ a: 54 });
foo1();
