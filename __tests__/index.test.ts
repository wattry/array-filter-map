import { describe, it, expect } from 'vitest';
import '../src/index.ts';

describe('filter-map', () => {
  it('should filter and map', () => {
    const arr = [1, 2, 3, 4, 5];

    arr
      .filterMapReplace((x: number) => {
        if (x % 2 === 0) {
          return `${x} is even`;
        }
      });

    expect(arr).toEqual(['2 is even', '4 is even']);
  });
});

describe('filter-map', () => {
  it('should filter and map when some meet the predicate', () => {
    const result = [1, 2, 3, 4, 5]
      .filterMap((x: number) => {
        if (x % 2 === 0) {
          return `${x} is even`;
        }
      });

    expect(result).toEqual(['2 is even', '4 is even']);
  });
});
