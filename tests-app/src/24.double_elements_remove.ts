export function removeDuplicates<T>(array: T[]): T[] {
  if (!array.length) return [];

  const arrResult: T[] = [];
  
  for (const el of array) {
    if(!arrResult.includes(el)){arrResult.push(el);}
  }
  return arrResult;
}

