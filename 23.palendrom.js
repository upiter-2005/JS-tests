
function isPalindrome(str){
  const len = str.length
  for (let i = 0; i < len; i++) {
    console.log(`i - ${str[i]}`);
    for (let j = len - 1 ; j >= 0  ; j--) {
      if(str[i] === str[j - i]) break;
      return false;
    }
  }
 return true;
}

let res = isPalindrome('привіт'); // true
// isPalindrome('привіт'); // false

console.log(res);