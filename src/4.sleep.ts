// return new Promise возвращает объект который можно await
// async delay way
function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, delay);
  });
}

async function doSmth() {
  console.log(1);
  await sleep(2500);
  console.log(3);
}
doSmth();
//////////////////////////////////////////////////////

//sync delay way
// function sleep(ms){
//   const time = Date.now() + ms
//   while(Date.now() < time){

//   }
// }

// console.log(1);
// sleep(2000)
// console.log(3);
