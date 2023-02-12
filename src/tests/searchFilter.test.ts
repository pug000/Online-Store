import { searchFilter } from 'utils/functions';

describe('Search filter functionality', () => {
  const randomValue = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '');

  test('empty search value', () => {
    expect(searchFilter('sdaa', '')).toBeTruthy();
    expect(searchFilter('i hate tests', '')).toBeTruthy();
  });

  test('non-empty search value', () => {
    expect(searchFilter('jkdhsf', 'f')).toBeTruthy();
    expect(searchFilter('vcbd', 'gftehyv')).toBeFalsy();
    expect(searchFilter('dsa', '   ')).toBeFalsy();
    expect(searchFilter('ewurowurow', 'ewurowurow')).toBeTruthy();
  });

  test('search value in uppercase', () => {
    expect(searchFilter('dsahas', 'DSAHAS')).toBeTruthy();
    expect(searchFilter('asdfds', 'BCVXM')).toBeFalsy();
    expect(searchFilter('SADDSA', 'DS')).toBeTruthy();
  });

  test('item name in uppercase', () => {
    expect(searchFilter('BCVB', 'bcvb')).toBeTruthy();
    expect(searchFilter('SAD', 'ddd')).toBeFalsy();
    expect(searchFilter('SafdsF', 'sF')).toBeTruthy();
  });

  test('item name with spaces', () => {
    expect(searchFilter('adsas bvccv', 'bvccv')).toBeTruthy();
    expect(searchFilter('fs d bv dsa', 'fs d')).toBeTruthy();
    expect(searchFilter('fs sdfreb trvnfg re', 'fssdf')).toBeFalsy();
  });

  test('random tests', () => {
    expect(searchFilter(randomValue, randomValue)).toBeTruthy();
    expect(searchFilter(randomValue.slice(0, 5), randomValue)).toBeFalsy();
    expect(searchFilter(randomValue, randomValue.slice(0, 2))).toBeTruthy();
  });
});
