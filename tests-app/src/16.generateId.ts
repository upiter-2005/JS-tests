export function generateId(length: number = 8): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const base = Date.now().toString(36);

  for (let i = 0; i < length - base.length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result + base;
}
