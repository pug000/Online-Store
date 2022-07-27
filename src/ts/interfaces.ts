export interface ProductData {
  num: string;
  brand: string;
  name: string;
  type: string;
  price: string;
  quantity: string;
  colorEffect: string;
}

export interface Options {
  id: number;
  option: string
}

export interface FilterState {
  search: string;
  sort: string;
  price: number[];
  quantity: number[];
  brand: string[];
  type: string[];
  colorEffect: string[];
}

export interface Checkbox {
  id: number;
  name: string;
}
