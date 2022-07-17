import React from "react";

export interface ProductData {
  num: string,
  brand: string,
  name: string,
  type: string,
  price: string,
  count: string,
  colorEffect: string,
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
  value: string,
  onChange: (value: string) => void;
  optionsLayout: OptionLayout[],

}

export interface OptionLayout {
  id: number,
  option: string
}

export interface FiltersProps {
  filter: FilterState,
  setFilter: (value: React.SetStateAction<FilterState>) => void;
}

export interface SearchProps {
  value: string,
  onChange: (value: string) => void;
}

export interface RangeSliderProps {
  value: number[],
  step: number,
  onChange: (value: number[]) => void;
  defaultValue: number[],
}

export interface FilterState {
  search: string,
  sort: string,
  price: number[],
  quantity: number[],
}