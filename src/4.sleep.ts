function sleep(delay: number) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(1);
    }, delay);
  });
}

async function doSmth(): Promise<void> {
  //console.log(1);
  await sleep(2500);
  //console.log(3);
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
