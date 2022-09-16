import React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  addCartItem,
  removeCartItem
} from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store';

import { ProductData } from '../../ts/interfaces';
import { SetState } from '../../ts/types';

import styles from './Product.module.scss';

interface ProductProps {
  products: ProductData[];
  setPopupOpen: SetState<boolean>;
}

function Product(
  {
    products,
    setPopupOpen,
  }: ProductProps,
) {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const checkSelectedProduct = (id: string) => cart.some((item) => item.id === id);

  const addToCart = (currentItem: ProductData) => (
    cart.length < 20
      ? dispatch(addCartItem(currentItem))
      : setPopupOpen((prev) => !prev)
  );

  const removeFromCart = (currentItem: ProductData) => (
    dispatch(removeCartItem(currentItem))
  );

  const handleClick = (currentItem: ProductData) => (
    checkSelectedProduct(currentItem.id)
      ? removeFromCart(currentItem)
      : addToCart(currentItem)
  );

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
              className={`${styles.productBottomBtn} ${checkSelectedProduct(item.id) && styles.productBottomBtnActive}`}
              onClick={() => handleClick(item)}
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
