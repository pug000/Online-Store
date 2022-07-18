import { rangeFilter } from "../settings";

describe('range filter function', () => {
  test('intermediate value', () => {
    expect(rangeFilter('5', [0, 10])).toBeTruthy();
  });

  test('less than min value', () => {
    expect(rangeFilter('0', [1, 10])).toBeFalsy();
  });

  test('greater than max value', () => {
    expect(rangeFilter('100', [1, 10])).toBeFalsy();
  });

  test('equal to min value', () => {
    expect(rangeFilter('20', [20, 250])).toBeTruthy();
    expect(rangeFilter('5', [10, 250])).toBeFalsy();
  });

  test('equal to max value', () => {
    expect(rangeFilter('250', [20, 250])).toBeTruthy();
    expect(rangeFilter('300', [20, 250])).toBeFalsy();
  });

  test('incorrect value', () => {
    expect(rangeFilter('adafscvx', [1, 999])).toBeFalsy();
    expect(rangeFilter('3143adafscvx', [1, 999])).toBeFalsy();
  });
});