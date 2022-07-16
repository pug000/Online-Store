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
  productData: ProductData[];
  cart: string[];
  setCart: (value: React.SetStateAction<string[]>) => void;
  setPopup: (value: React.SetStateAction<boolean>) => void;
}

export interface PopupProps {
  popup: boolean;
  onClick: () => void;
}