Function.prototype.myBind = function (context) {
  return () => {
    console.log(this);
    this.apply(context);
  };
};

function foo() {
  console.log(`foo console.log ` + this.a);
}

const foo1 = foo.myBind({ a: 54 });
foo1();
