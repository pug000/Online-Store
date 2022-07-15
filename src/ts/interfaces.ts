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
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  cart: string[];
}