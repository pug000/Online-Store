import React, { useCallback } from 'react';
import {
  addCartItem,
  removeCartItem
} from 'redux/slices/cartSlice';
import { setPopupOpen } from 'redux/slices/popupSlice';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

import { ProductData } from 'ts/interfaces';

import styles from './Product.module.scss';

function Product() {
  const products = useAppSelector((state) => state.products);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const checkSelectedProduct = useCallback((id: string) => (
    cart.some((item) => item.id === id)
  ), [cart]);

  const addToCart = useCallback((currentItem: ProductData) => (
    cart.length < 20
      ? dispatch(addCartItem(currentItem))
      : dispatch(setPopupOpen(true))
  ), [cart]);

  const removeFromCart = useCallback((currentItem: ProductData) => (
    dispatch(removeCartItem(currentItem))
  ), [cart]);

  const selectProductOnClick = useCallback((currentItem: ProductData) => (
    checkSelectedProduct(currentItem.id)
      ? removeFromCart(currentItem)
      : addToCart(currentItem)
  ), [cart]);

  if (!products.length) {
    return (
      <div className={styles.noResultWrapper}>
        <h2 className={styles.noResultWrapperTitle}>Извините, совпадений не обнаружено</h2>
      </div>
    );
  }

  return (
    <div className={styles.productWrapper}>
      {products.map((item) => (
        <div className={styles.product} key={item.id}>
          <div className={styles.productTitle}>{item.name}</div>
          <div className={styles.productContainer}>
            <img
              className={styles.productContainerImg}
              src={`./assets/img/${item.id}.png`}
              alt="product-img"
            />
          </div>
          <div className={styles.productDescription}>
            <div className={styles.productDescriptionCount}>
              Количество:
              {' '}
              {item.quantity}
            </div>
            <div className={styles.productDescriptionBrand}>
              Производитель:
              {' '}
              {item.brand}
            </div>
            <div className={styles.productDescriptionType}>
              Тип клавиатуры:
              {' '}
              {item.type}
            </div>
            <div className={styles.productDescriptionColorEffect}>
              Цвет подсветки:
              {' '}
              {item.colorEffect}
            </div>
          </div>
          <div className={styles.productBottom}>
            <div className={styles.productBottomPrice}>
              $
              {item.price}
            </div>
            <button
              type="button"
              className={
                checkSelectedProduct(item.id)
                  ? `${styles.productBottomBtn} ${styles.productBottomBtnActive}`
                  : `${styles.productBottomBtn}`
              }
              onClick={() => selectProductOnClick(item)}
            >
              {checkSelectedProduct(item.id) ? 'Удалить из корзины' : 'Добавить в корзину'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
