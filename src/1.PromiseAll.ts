// type PromiseArray = unknown[];

// const urls: PromiseArray = [
//   fetch("https://api.github.com/users/jeresig"),
//   fetch("https://drivovo.ua/wp-json/custom/v1/typesCar?body_type=suv"),
//   fetch("https://api.github.com/users/remy"),
//   fetch("https://api.github.com/users/jeressdadasdasdig"),
//   1,
//   2,
// ];

export const promiseMyAll = function <T>(
  promises: (T | Promise<T>)[],
): Promise<T[]> {
  const result: T[] = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((pr, i: number) => {
      Promise.resolve(pr)
        .then((res) => {
          result[i] = res as Awaited<T>;
          count++;
          if (promises.length === count) resolve(result);
        })
        .catch((err) => reject(err));
    });
  });
};
