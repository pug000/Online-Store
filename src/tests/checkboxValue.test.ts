import { checkboxFilter } from '../settings';

describe('checkbox function', () => {
  test('correct value', () => {
    expect(checkboxFilter('asd', ['asd'])).toBeTruthy();
    expect(checkboxFilter('vcbfd', ['asdt64', 'vcbfd'])).toBeTruthy();
  });

  test('incorrect value', () => {
    expect(checkboxFilter('vcbfd', ['sdsdf', '435u89', 'yukjlg'])).toBeFalsy();
    expect(checkboxFilter('myij', ['ghu5fg', '789uy', ''])).toBeFalsy();
  });

  test('empty value', () => {
    expect(checkboxFilter('vcbfd', [])).toBeTruthy();
    expect(checkboxFilter('', [])).toBeFalsy();
    expect(checkboxFilter('', ['sfdc'])).toBeFalsy();
  });
});
