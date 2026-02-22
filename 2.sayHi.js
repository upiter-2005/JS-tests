String.prototype.sayHi = function(value){
  return `Hello from:  ${value} `;
}

const str = ''
const res = str.sayHi('rtyrtyrtyrty')
console.log(res);