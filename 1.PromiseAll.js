// 1) Создаём новый промис, который будет результатом.
// 2) Для каждого элемента массива вызываем Promise.resolve(p) — чтобы поддерживать обычные значения (например, числа).
// 3) На then сохраняем результат в массив results по индексу.
// 4) Считаем, сколько завершилось (completed++).
// 5) Когда все завершены — вызываем resolve(results).
// 6) Если хотя бы один упал — reject(err).
// 7) Следи за разницей Promise.resolve(pr) и promise(pr)
async function operation (url) {
  return new Promise((resolve, reject) => {
    const res = fetch(url)
    resolve(res)
  })
}
let urls = [
  operation('https://api.github.com/users/jeresig'),
  operation('https://drivovo.ua/wp-json/custom/v1/typesCar?body_type=suv'),
  operation('https://api.github.com/users/remy'),
  operation('https://api.github.com/users/jeressdadasdasdig'),
  1,
  2,
  // Promise.reject('Error!')
];

Promise.myAll = function (promises) {
  const result = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((pr, i) => {
      Promise.resolve(pr)  // тут мы используем статический метод класса Promise
      .then(res => {
        result.push(res)
        count++;
        if(promises.length === count) resolve(result);
      })
      .catch(err => reject(err))
    }) 
  })
 
} 
 Promise.myAll(urls).then(res => console.log(res)).catch(err => console.log(err))

