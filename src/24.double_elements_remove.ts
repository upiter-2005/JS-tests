export function removeDuplicates<T>(array: T[]): T[] {
  if (!array.length) return [];
  const arrResult: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") return [];
    let isExist = false;
    for (let j = 0; j < arrResult.length; j++) {
      if (array[i] === arrResult[j]) {
        isExist = true;
        break;
      }
    }
    if (!isExist) arrResult.push(array[i]);
  }
  return arrResult;
}
