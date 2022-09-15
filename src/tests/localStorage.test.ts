import {
  getLocalStorage,
  setLocalStorage
} from '../local';

describe('save array in local storage', () => {
  test('save n load', () => {
    setLocalStorage('asdf', [0, 10]);
    expect(getLocalStorage('asdf', [])).toEqual([0, 10]);
  });

  test('load without save', () => {
    expect(getLocalStorage('sajhb', ['sda', 'sdfs'])).toEqual(['sda', 'sdfs']);
  });
});

describe('save object in local storage', () => {
  test('save n load', () => {
    setLocalStorage('cvb', { a: 'fcvd' });
    expect(getLocalStorage('cvb', { b: 'vcvd' })).toStrictEqual({ a: 'fcvd' });
  });

  test('load without save', () => {
    expect(getLocalStorage('fghjklr', { g: 'ueiowur' })).toStrictEqual({ g: 'ueiowur' });
  });
});

describe('save string in local storage', () => {
  test('save n load', () => {
    setLocalStorage('bvn', 'fds');
    expect(getLocalStorage('bvn', '')).toBe('fds');
  });

  test('load without save', () => {
    expect(getLocalStorage('bvngdte', '')).toBe('');
  });
});

describe('save number in local storage', () => {
  test('save n load', () => {
    setLocalStorage('buhjhhj', 5234);
    expect(getLocalStorage('buhjhhj', 9808)).toBe(5234);
  });

  test('load without save', () => {
    expect(getLocalStorage('jhgmjg', 43688)).toBe(43688);
  });
});
