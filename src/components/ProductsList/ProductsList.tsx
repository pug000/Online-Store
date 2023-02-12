import { memo, useCallback } from 'react';

import { addCartItem, removeCartItem } from 'redux/slices/cartSlice';
import * as cartSelectors from 'redux/selectors/cartSelector';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

import type { ProductData } from 'ts/interfaces';

import NoResults from './NoResults/NoResults';
import ProductItem from './ProductItem/ProductItem';

import styles from './ProductsList.module.scss';

interface ProductsListProps {
  openPopup: () => void;
}

function ProductsList({ openPopup }: ProductsListProps) {
  const products = useAppSelector((state) => state.products);
  const cart = useAppSelector(cartSelectors.getCart);
  const dispatch = useAppDispatch();

  const addToCart = useCallback(
    (currentItem: ProductData) =>
      cart.length < 20 ? dispatch(addCartItem(currentItem)) : openPopup(),
    [cart]
  );

  const removeFromCart = useCallback(
    (currentItem: ProductData) => dispatch(removeCartItem(currentItem)),
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
