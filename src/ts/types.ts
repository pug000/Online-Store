import { OptionValue } from "./enum";

export type SortMap<T> = {
  [OptionValue.AZ]: T;
  [OptionValue.ZA]: T;
  [OptionValue.minPrice]: T;
  [OptionValue.maxPrice]: T;
  [OptionValue.minQuantity]: T;
  [OptionValue.maxQuantity]: T;
}

export type eventHandler<T, R> = (arg: T) => R;

export type setState<T, R> = (arg: T) => R;