import React from "react";
import { eventHandler, setState, SortMap } from "./types";

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
  product: Readonly<ProductData>;
  cart: string[];
  setCart: setState<React.SetStateAction<string[]>, void>;
  setPopup: setState<React.SetStateAction<boolean>, void>;
}

export interface PopupProps {
  popup: boolean;
  onClick: eventHandler<React.MouseEvent<HTMLButtonElement | HTMLDivElement>, void>;
}

export interface SelectedSortProps {
  value: keyof SortMap<ProductData[]>;
  onChange: eventHandler<keyof SortMap<ProductData[]>, void>;
  optionsLayout: Readonly<OptionLayout[]>;
}

export interface OptionLayout {
  id: number;
  option: string
}

export interface FiltersProps {
  filter: FilterState;
  setFilter: setState<React.SetStateAction<FilterState>, void>;
  defaultFilters: FilterState;
  setCart: setState<React.SetStateAction<string[]>, void>;
}

export interface SearchProps {
  value: string;
  onChange: eventHandler<string, void>;
  clearOnClick: eventHandler<React.MouseEvent<HTMLButtonElement>, void>;
}

export interface RangeSliderProps {
  title: string;
  value: number[];
  step: number;
  onChange: eventHandler<number[], void>;
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
  layout: Readonly<CheckboxLayout[]>;
  filter: string[];
  addOnClick: eventHandler<string, void>;
  removeOnClick: eventHandler<string, void>;
}

export interface CheckboxItemProps extends Omit<CheckboxProps, 'title' | 'layout'> {
  name: string;
}

export interface ResetButtonProps {
  text: string;
  resetOnClick: eventHandler<React.MouseEvent<HTMLButtonElement>, void>;
}