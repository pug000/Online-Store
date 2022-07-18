import { sortFilter } from "../settings";
import { OptionValue } from "../ts/enum";
import { defaultData, sortedByAZ, sortedByMaxPrice, sortedByMaxQuantity, sortedByMinPrice, sortedByZA } from "./testData";



describe('Sort filter function', () => {
  test('sort by name A-Z', () => {
    expect(sortFilter(defaultData, OptionValue.first)).toEqual(sortedByAZ);
  });

  test('sort by name Z-A', () => {
    expect(sortFilter(defaultData, OptionValue.second)).toEqual(sortedByZA);
  });

  test('sort by min price', () => {
    expect(sortFilter(defaultData, OptionValue.third)).toEqual(sortedByMinPrice);
  });

  test('sort by max price', () => {
    expect(sortFilter(defaultData, OptionValue.fourth)).toEqual(sortedByMaxPrice);
  });

  test('sort by max quantity', () => {
    expect(sortFilter(defaultData, OptionValue.fifth)).toEqual(sortedByMaxQuantity);
  });

  test('sort by min quantity', () => {
    expect(sortFilter(defaultData, OptionValue.sixth)).toEqual(sortedByMaxQuantity);
  });

  test('wrong sort value', () => {
    expect(sortFilter(defaultData, 'asdhjfas')).toEqual(defaultData);
  });
});