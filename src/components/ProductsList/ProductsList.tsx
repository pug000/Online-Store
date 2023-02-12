import { memo, useCallback } from 'react';

import { cartActions } from 'redux/slices/cartSlice';
import * as cartSelectors from 'redux/selectors/cartSelector';

import { useActions, useAppSelector } from 'hooks/useRedux';

import type { ProductData } from 'ts/interfaces';

import NoResults from './NoResults/NoResults';
import ProductItem from './ProductItem/ProductItem';

import styles from './ProductsList.module.scss';

interface ProductsListProps {
  products: ProductData[];
  openPopup: () => void;
}

function ProductsList({ products, openPopup }: ProductsListProps) {
  const cart = useAppSelector(cartSelectors.getCart);
  const { addCartItem, removeCartItem } = useActions(cartActions);

  const addToCart = useCallback(
    (currentItem: ProductData) =>
      cart.length < 20 ? addCartItem(currentItem) : openPopup(),
    [cart]
  );

  const removeFromCart = useCallback(
    (currentItem: ProductData) => removeCartItem(currentItem),
    [cart]
  );

  if (!products.length) {
    return <NoResults text="Извините, совпадений не обнаружено" />;
  }

  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}

export default memo(ProductsList);
