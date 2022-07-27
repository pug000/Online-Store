import dataLayout from "./layout/data";
import { OptionValue } from "./ts/enum";
import { ProductData } from "./ts/interfaces";

export const sortFilter = (data: ProductData[], value: string) => {
  const sortMap: Record<string, ProductData[]> = {
    [OptionValue.AZ]: [...data].sort((a, b) => a.name.localeCompare(b.name)),
    [OptionValue.ZA]: [...data].sort((a, b) => b.name.localeCompare(a.name)),
    [OptionValue.minPrice]: [...data].sort((a, b) => Number(a.price) - Number(b.price)),
    [OptionValue.maxPrice]: [...data].sort((a, b) => Number(b.price) - Number(a.price)),
    [OptionValue.minQuantity]: [...data].sort((a, b) => Number(a.quantity) - Number(b.quantity)),
    [OptionValue.maxQuantity]: [...data].sort((a, b) => Number(b.quantity) - Number(a.quantity)),
  };

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

export const getMinValue = (item: number[]): number => Math.min(...item);

export const getMaxValue = (item: number[]): number => Math.max(...item);

const dataNumPrice = dataLayout.map((el) => Number(el.price));
const dataNumQuantity = dataLayout.map((el) => Number(el.quantity));

export const minPrice = getMinValue(dataNumPrice);
export const maxPrice = getMaxValue(dataNumPrice);
export const minQuantity = getMinValue(dataNumQuantity);
export const maxQuantity = getMaxValue(dataNumQuantity);
