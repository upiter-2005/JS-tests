function sleep(delay: number) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(1);
    }, delay);
  });
}

export async function doSmth(): Promise<void> {
  console.log(1);
  await sleep(2500);
  console.log(3);
}
