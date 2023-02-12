import OptionValue from 'ts/enum';
import type { Options, Checkbox } from 'ts/interfaces';

import { getMaxValue, getMinValue } from './functions';
import products from './products';

const options: Options[] = [
  { id: 1, option: OptionValue.AZ },
  { id: 2, option: OptionValue.ZA },
  { id: 3, option: OptionValue.minPrice },
  { id: 4, option: OptionValue.maxPrice },
  { id: 5, option: OptionValue.minQuantity },
  { id: 6, option: OptionValue.maxQuantity },
];

const brands: Checkbox[] = [
  { id: 1, name: 'Cougar' },
  { id: 2, name: 'HyperX' },
  { id: 3, name: 'Razer' },
  { id: 4, name: 'MSI' },
  { id: 5, name: 'Corsair' },
  { id: 6, name: 'ZET' },
];

const types: Checkbox[] = [
  { id: 1, name: 'механическая' },
  { id: 2, name: 'ножничная' },
  { id: 3, name: 'мембранная' },
];

const colorsEffect: Checkbox[] = [
  { id: 1, name: 'RGB' },
  { id: 2, name: 'многоцветная' },
  { id: 3, name: 'красная' },
];

const dataNumPrice = products.map((el) => Number(el.price));
const dataNumQuantity = products.map((el) => Number(el.quantity));

const minPrice = getMinValue(dataNumPrice);
const maxPrice = getMaxValue(dataNumPrice);
const minQuantity = getMinValue(dataNumQuantity);
const maxQuantity = getMaxValue(dataNumQuantity);

export {
  options,
  brands,
  types,
  colorsEffect,
  minPrice,
  maxPrice,
  minQuantity,
  maxQuantity,
};