declare global {
  interface Array<T> {
    /**
     * Returns a new array with the results of calling a provided function on every element in this array if it meets the predicate condition.
     * Predicate callback function must return undefined if the condition is not met.
     */
    filterMap<U>(predicate: (value: T, index: number, array: T[]) => U | void): U[];
  }
}

Array.prototype.filterMap = function<T, U>(
  this: T[],
  predicate: (value: T, index: number, array: T[]) => U | void
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
