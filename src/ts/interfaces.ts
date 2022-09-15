interface ProductData {
  id: string;
  brand: string;
  name: string;
  type: string;
  price: string;
  quantity: string;
  colorEffect: string;
}

interface Options {
  id: number;
  option: string
}

interface FilterState {
  search: string;
  sort: string;
  price: number[];
  quantity: number[];
  brand: string[];
  type: string[];
  colorEffect: string[];
}

interface Checkbox {
  id: number;
  name: string;
}

export type {
  ProductData,
  Options,
  FilterState,
  Checkbox
};
