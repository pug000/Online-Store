import React from "react";
import { SortMap } from "./types";

export interface ProductData {
  num: string;
  brand: string;
  name: string;
  type: string;
  price: string;
  count: string;
  colorEffect: string;
}

export interface HeaderProps {
  cart: string[];
}
export interface ProductProps {
  product: ProductData;
  cart: string[];
  setCart: (value: React.SetStateAction<string[]>) => void;
  setPopup: (value: React.SetStateAction<boolean>) => void;
}

export interface PopupProps {
  popup: boolean;
  onClick: () => void;
}

export interface SelectedSortProps {
  value: keyof SortMap<ProductData[]>;
  onChange: (value: keyof SortMap<ProductData[]>) => void;
  optionsLayout: OptionLayout[];

}

export interface OptionLayout {
  id: number;
  option: string
}

export interface FiltersProps {
  filter: FilterState;
  setFilter: (value: React.SetStateAction<FilterState>) => void;
  defaultFilters: FilterState;
  setCart: (value: React.SetStateAction<string[]>) => void;
}

export interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  clearOnClick: () => void;
}

export interface RangeSliderProps {
  title: string;
  value: number[];
  step: number;
  onChange: (value: number[]) => void;
  defaultValue: number[];
}

export interface FilterState {
  search: string;
  sort: keyof SortMap<ProductData[]>;
  price: number[];
  quantity: number[];
  brand: string[];
  type: string[];
  colorEffect: string[];
}

export interface CheckboxLayout {
  id: number;
  name: string;
}

export interface CheckboxProps {
  title: string;
  layout: CheckboxLayout[];
  filter: string[];
  addOnClick: (value: string) => void;
  removeOnClick: (value: string) => void;
}

export interface CheckboxItemProps {
  name: string;
  filter: string[];
  addOnClick: (value: string) => void;
  removeOnClick: (value: string) => void;
}

export interface ResetButtonProps {
  text: string;
  resetOnClick: () => void;
}