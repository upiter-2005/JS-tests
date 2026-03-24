export {};
declare global {
  interface PromiseConstructor {
    promiseMyAll<T>(promises: (T | Promise<T>)[]): Promise<T[]>;
  }
}
