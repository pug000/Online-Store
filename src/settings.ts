import { dataLayout } from "./layout/data";
import { OptionValue } from "./ts/enum";
import { ProductData } from "./ts/interfaces";
import { SortMap } from "./ts/types";

export const sortFilter = (data: ProductData[], value: keyof SortMap<ProductData[]>) => {
  const sortMap: SortMap<ProductData[]> = {
    [OptionValue.AZ]: [...data].sort((a, b) => a.name.localeCompare(b.name)),
    [OptionValue.ZA]: [...data].sort((a, b) => b.name.localeCompare(a.name)),
    [OptionValue.minPrice]: [...data].sort((a, b) => Number(a.price) - Number(b.price)),
    [OptionValue.maxPrice]: [...data].sort((a, b) => Number(b.price) - Number(a.price)),
    [OptionValue.minQuantity]: [...data].sort((a, b) => Number(a.count) - Number(b.count)),
    [OptionValue.maxQuantity]: [...data].sort((a, b) => Number(b.count) - Number(a.count))
  }

  return sortMap[value];
};

export const searchFilter = (name: string, value: string) => {
  return name.toLowerCase().includes(value.toLowerCase());
};

export const rangeFilter = <T>(item: T, value: number[]) => {
  return value[0] <= Number(item) && Number(item) <= value[1];
};

export const checkboxFilter = <T>(item: T, value: T[]): boolean | T => {
  return value.length === 0 ? item : value.includes(item);
};

export const getMinValue = (item: number[]): number => {
  return Math.min.apply(null, [...item]);
};

export const getMaxValue = (item: number[]): number => {
  return Math.max.apply(null, [...item]);
};

const dataNumPrice = dataLayout.map((el) => Number(el.price));
const dataNumQuantity = dataLayout.map((el) => Number(el.count));

export const minPrice = getMinValue(dataNumPrice);
export const maxPrice = getMaxValue(dataNumPrice);
export const minQuantity = getMinValue(dataNumQuantity);
export const maxQuantity = getMaxValue(dataNumQuantity);