function flatten(array){
 const resArray = []
 for(let el of array){
  if(Array.isArray(el)){
    resArray.push(...flatten(el))
  }else{
    resArray.push(el)
  }
 }
 return resArray;
}

const res = flatten([1, [2, [3, [4], 5, 7, [1, [22333]]]]]); // результат: [1, 2, 3, 4] 
console.log(res);