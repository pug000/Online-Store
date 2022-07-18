import { getMinValue, getMaxValue } from '../settings';

describe('Min Max Value', () => {
  test('Min value', () => {
    expect(getMinValue([2, 5, 7, 9])).toBe(2);
    expect(getMinValue([8, 5, 7, 9, 10, 20, 99, 5])).toBe(5);
    expect(getMinValue([8, 5, 7, 9, 10, 20, 99, 5])).toBeLessThan(10);
  });

  test('Max value', () => {
    expect(getMaxValue([2, 5, 7, 9])).toBe(9);
    expect(getMaxValue([8, 5, 7, 9, 10, 20, 99, 5])).toBe(99);
    expect(getMaxValue([8, 5, 7, 9, 10, 20, 99, 5])).toBeGreaterThan(50);
  });
});