import { filterMap } from './replace.ts';

declare global {
  interface Array<T> {
    /**
     * Filters array in place with the results of calling a provided function on every element in this array if it meets the predicate condition.
     * Predicate callback function must return undefined if the condition is not met.
     */
    filterMapReplace<U>(predicate: (value: T, index: number, array: T[]) => U | void): void;
  }
}

Array.prototype.filterMapReplace = filterMap;
