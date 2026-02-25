let urls = [
  fetch('https://api.github.com/users/jeresig'),
  fetch('https://drivovo.ua/wp-json/custom/v1/typesCar?body_type=suv'),
  fetch('https://api.github.com/users/remy'),
  fetch('https://api.github.com/users/jeressdadasdasdig'),
  1,
  2,
];

Promise.myAll = function (promises) {
  const result = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((pr, i) => {
      Promise.resolve(pr)  
      .then(res => {
        result[i] = res;
        count++;
        if(promises.length === count) resolve(result);
      })
      .catch(err => reject(err))
    }) 
  })
 
} 

Promise.myAll(urls).then(res => console.log(res)).catch(err => console.log(err))

