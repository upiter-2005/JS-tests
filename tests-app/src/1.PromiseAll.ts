Promise.promiseMyAll = function <T>(
  promises: (T | Promise<T>)[],
): Promise<T[]> {
  if (!promises.length) return Promise.resolve([]);

  const result: T[] = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((pr, i: number) => {
      Promise.resolve(pr)
        .then((res: Awaited<T>) => {
          result[i] = res;
          count++;
          if (promises.length === count) resolve(result);
        })
        .catch((err: string) => reject(err));
    });
  });
};
