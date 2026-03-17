export {};

declare global {
  interface String {
    sayHi(value: string): string;
  }
}

String.prototype.sayHi = function (value: string): string {
  return `Hello from: ${value} - ${this}`;
};
