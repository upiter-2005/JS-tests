function generateId(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const base = Date.now().toString(36);

  for (let i = 0; i < length - base.length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result + base;
}
console.log(generateId(10));
