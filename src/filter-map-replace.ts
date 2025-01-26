declare global {
  interface Array<T> {
    /**
     * Filters array in place with the results of calling a provided function on every element in this array if it meets the predicate condition.
     * Predicate callback function must return undefined if the condition is not met.
     */
    filterMapReplace<U>(predicate: (value: T, index: number, array: T[]) => U | void): void;
  }
}

Array.prototype.filterMapReplace = function <T, U>(
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
