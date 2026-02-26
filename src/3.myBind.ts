declare module "function-module" {
  global {
    interface Function {
      myBind(fn: () => void): () => void;
    }
  }
}

Function.prototype.myBind = function (context) {
  return () => {
    this.apply(context);
  };
};

function foo() {
  console.log(`foo console.log ` + this.a);
}

const foo1 = foo.myBind({ a: 54 });
foo1();
