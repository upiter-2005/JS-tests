export function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    const tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  return arr;
}

export function mergeSortedArrays(...args) {
  const buildArr = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      buildArr.push(args[i][j]);
    }
  }
  return sort(buildArr);
}

mergeSortedArrays([1, 37, 5], [2, 4, 6]); //[1, 2, 3, 4, 5, 6]
