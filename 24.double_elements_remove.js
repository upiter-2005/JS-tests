const arr = [1, 2, 2, 3, 4, 4, 5, 3, 5, 8]

function removeDuplicates (array) {
  let arrResult = []
  for(let i = 0; i < array.length; i++){
    let isExist = false;
    for(let j = 0; j < arrResult.length; j++){
      if(array[i] === arrResult[j]){
        isExist = true;
        break;
      }
    }
    if(!isExist) arrResult.push(array[i])
  }
  return {arrResult}
}

console.log(removeDuplicates(arr));



