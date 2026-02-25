function isPalindrome(str: string) {
  const len = str.length;
  for (let i = 0; i < len; i++) {
    console.log(`i - ${str[i]}`);
    for (let j = len - 1; j >= 0; j--) {
      if (str[i] === str[j - i]) break;
      return false;
    }
  }
  return true;
}

const res = isPalindrome("привіт");
isPalindrome("привіт");

console.log(res);
