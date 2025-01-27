import { describe, it, expect } from 'vitest';
import { filterMap } from '../src/map.ts';

describe('filter-map', () => {
  it('should filter and map when some meet the predicate', () => {
    const result = filterMap.apply(
      [1, 2, 3, 4, 5],
      [(x: number) => {
        if (x % 2 === 0) {
          return `${x} is even`;
        }
      }]
    );

    expect(result).toEqual(['2 is even', '4 is even']);
  });
});
