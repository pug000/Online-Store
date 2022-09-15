import { sortFilter } from "../settings";

import OptionValue from "../ts/enum";

import defaultData, {
  sortedByAZ,
  sortedByMaxPrice,
  sortedByMaxQuantity,
  sortedByMinPrice,
  sortedByMinQuantity,
  sortedByZA
} from "./testData";



describe('Sort filter function', () => {
  test('sort by name A-Z', () => {
    expect(sortFilter(defaultData, OptionValue.AZ)).toEqual(sortedByAZ);
  });

  test('sort by name Z-A', () => {
    expect(sortFilter(defaultData, OptionValue.ZA)).toEqual(sortedByZA);
  });

  test('sort by min price', () => {
    expect(sortFilter(defaultData, OptionValue.minPrice)).toEqual(sortedByMinPrice);
  });

  test('sort by max price', () => {
    expect(sortFilter(defaultData, OptionValue.maxPrice)).toEqual(sortedByMaxPrice);
  });

  test('sort by min quantity', () => {
    expect(sortFilter(defaultData, OptionValue.minQuantity)).toEqual(sortedByMinQuantity);
  });

  test('sort by max quantity', () => {
    expect(sortFilter(defaultData, OptionValue.maxQuantity)).toEqual(sortedByMaxQuantity);
  });
});
