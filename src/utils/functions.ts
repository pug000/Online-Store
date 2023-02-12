import OptionValue from '../ts/enum';
import type { ProductData } from '../ts/interfaces';

const sortFilter = (data: ProductData[], value: string) => {
  const sortMap: Record<string, ProductData[]> = {
    [OptionValue.AZ]: [...data].sort((a, b) => a.name.localeCompare(b.name)),
    [OptionValue.ZA]: [...data].sort((a, b) => b.name.localeCompare(a.name)),
    [OptionValue.minPrice]: [...data].sort((a, b) => Number(a.price) - Number(b.price)),
    [OptionValue.maxPrice]: [...data].sort((a, b) => Number(b.price) - Number(a.price)),
    [OptionValue.minQuantity]: [...data].sort(
      (a, b) => Number(a.quantity) - Number(b.quantity)
    ),
    [OptionValue.maxQuantity]: [...data].sort(
      (a, b) => Number(b.quantity) - Number(a.quantity)
    ),
  };

  return sortMap[value];
};

const searchFilter = (name: string, value: string) =>
  name.toLowerCase().includes(value.toLowerCase());

const rangeFilter = <T>(item: T, value: number[]) =>
  value[0] <= Number(item) && Number(item) <= value[1];

const checkboxFilter = <T>(item: T, value: T[]): boolean | T =>
  value.length === 0 ? item : value.includes(item);

const getMinValue = (item: number[]): number => Math.min(...item);

const getMaxValue = (item: number[]): number => Math.max(...item);

export {
  searchFilter,
  sortFilter,
  rangeFilter,
  checkboxFilter,
  getMinValue,
  getMaxValue,
};
