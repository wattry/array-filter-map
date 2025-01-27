export function filterMap<T, U>(
  this: U[],
  predicate: (value: T, index: number, array: U[]) => U | void
): void {
  for (let i = 0; i < this.length; i++) {
    const result = predicate(this[i] as T, i, this);

    if (result === undefined) {
      this.splice(i, 1);
      i -= 1;
    } else {
      this[i] = result;
    }
  }
};
