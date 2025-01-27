import { describe, it, expect } from 'vitest';
import { filterMap } from '../src/replace.ts';

describe('filter-map', () => {
  it('should filter and map', () => {
    const arr = [1, 2, 3, 4, 5];

    filterMap.apply(arr, [(x: number) => {
      if (x % 2 === 0) {
        return `${x} is even`;
      }
    }]);

    expect(arr).toEqual(['2 is even', '4 is even']);
  });
});
