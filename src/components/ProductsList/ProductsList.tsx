import { memo, useCallback } from 'react';

import { addCartItem, removeCartItem } from 'redux/slices/cartSlice';
import { setBooleanState } from 'redux/slices/booleanSlice';
import * as cartSelectors from 'redux/selectors/cartSelector';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

import type { ProductData } from 'ts/interfaces';

import NoResults from './NoResults/NoResults';
import ProductItem from './ProductItem/ProductItem';

import styles from './ProductsList.module.scss';

function ProductsList() {
  const products = useAppSelector((state) => state.products);
  const cart = useAppSelector(cartSelectors.getCart);
  const dispatch = useAppDispatch();

  const addToCart = useCallback(
    (currentItem: ProductData) =>
      cart.length < 20
        ? dispatch(addCartItem(currentItem))
        : dispatch(setBooleanState({ key: 'isPopupOpen', value: true })),
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
