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

export function mergeSortedArrays(...args: number[][]): number[] {
  if (!args.length) {
    return [];
  }
  const buildArr: number[] = [];
  for(const arr of args){
    for (const el of arr){
      buildArr.push(el)
    }
  }

  
  return sort(buildArr);
}
