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
}

export const searchFilter = (name: string, value: string) => {
  return name.toLowerCase().includes(value.toLowerCase());
}