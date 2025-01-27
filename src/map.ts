export function filterMap<T, U>(
  this: T[],
  predicate: (value: T, index: number, array: T[]) => U | void,
): U[] {
  const array: U[] = [];

  for (let i = 0; i < this.length; i++) {
    const result = predicate(this[i] as T, i, this);

    if (result === undefined) {
      continue;
    } else {
      array.push(result);
    }
  }

  return array;
};
