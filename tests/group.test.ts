import { describe, expect, it } from 'vitest';
import { groupByYear } from '../src/utils/group';

describe('groupByYear', () => {
  it('groups consecutive items that share a year', () => {
    const groups = groupByYear([
      { year: 2020, title: 'A' },
      { year: 2020, title: 'B' },
      { year: 2019, title: 'C' },
    ]);

    expect(groups).toEqual([
      {
        year: 2020,
        items: [
          { year: 2020, title: 'A' },
          { year: 2020, title: 'B' },
        ],
      },
      { year: 2019, items: [{ year: 2019, title: 'C' }] },
    ]);
  });
});
