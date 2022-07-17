import { dataLayout } from "./layout/data";
import { OptionValue } from "./ts/enum";
import { ProductData } from "./ts/interfaces";

export const sortFilter = (data: ProductData[], value: string) => {
  switch (value) {
    case OptionValue.first:
      return data.sort((a, b) => a.name.localeCompare(b.name));
    case OptionValue.second:
      return data.sort((a, b) => b.name.localeCompare(a.name));
    case OptionValue.third:
      return data.sort((a, b) => Number(a.price) - Number(b.price));
    case OptionValue.fourth:
      return data.sort((a, b) => Number(b.price) - Number(a.price));
    case OptionValue.fifth:
      return data.sort((a, b) => Number(b.count) - Number(a.count));
    case OptionValue.sixth:
      return data.sort((a, b) => Number(a.count) - Number(b.count));
    default:
      return data;
  }
};

export const searchFilter = (name: string, value: string) => {
  return name.toLowerCase().includes(value.toLowerCase());
};

export const sliderFilter = (item: string, value: number[]) => {
  return value[0] <= Number(item) && Number(item) <= value[1];
};

export const checkboxFilter = (item: string, value: string[]) => {
  return value.length === 0 ? item : value.includes(item);
};

const getMinValue = (item: number[]): number => {
  return Math.min.apply(null, [...item]);
};

const getMaxValue = (item: number[]): number => {
  return Math.max.apply(null, [...item]);
};

export const minPrice = getMinValue(dataLayout.map((el) => Number(el.price)));
export const maxPrice = getMaxValue(dataLayout.map((el) => Number(el.price)));
export const minQuantity = getMinValue(dataLayout.map((el) => Number(el.count)));
export const maxQuantity = getMaxValue(dataLayout.map((el) => Number(el.count)));