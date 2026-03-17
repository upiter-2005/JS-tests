export const flatten = <T>(array: T[]): T[] => {
  const resArray = [];

  if (!array.length) return [];

  for (const el of array) {
    if (Array.isArray(el)) {
      resArray.push(...flatten(el));
    } else {
      resArray.push(el);
    }
  }
  return resArray;
};
