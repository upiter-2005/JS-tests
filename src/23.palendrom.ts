export function isPalindrome(str: string): boolean {
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
