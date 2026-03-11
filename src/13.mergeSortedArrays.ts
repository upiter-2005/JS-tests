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
  if (!args.length) {
    return [];
  }
  const buildArr = [];
  for (let i = 0; i < args.length; i++) {
    if (!Array.isArray(args[i])) {
      continue;
    }

    for (let j = 0; j < args[i].length; j++) {
      buildArr.push(args[i][j]);
    }
  }
  return sort(buildArr);
}
