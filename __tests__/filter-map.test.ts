import { describe, it, expect } from 'vitest';
import assert from 'node:assert';
import '../src/filter-map.ts';

describe('filter-map', () => {
  it('should filter and map when some meet the predicate', () => {
    const result = [1, 2, 3, 4, 5].filterMap((x: number) => {
      if (x % 2 === 0) {
        return `${x} is even`;
      }
    });

    assert.deepEqual(result, ['2 is even', '4 is even']);
    expect(result).toEqual(['2 is even', '4 is even']);
  });

  it('filterMapReplace should be undefined when index is not imported', () => {
    expect([1, 2, 3, 4, 5].filterMapReplace).toBeUndefined();
  });
});
