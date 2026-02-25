Array.prototype.isEqual = function (array) {
  if (!Array.isArray(array) || array.length !== this.length) return false;
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== array[i]) return false;
  }
  return true;
};

const arr = [6, 7, "8"];

console.log(arr.isEqual([6, 7, "8"]));
