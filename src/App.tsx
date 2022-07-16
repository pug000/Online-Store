import React, { FC, useState } from 'react';
import { Header } from './components/Header/Header';
import { Product } from './components/Product/Product';
import { Search } from './components/Search/Search';
import { Sort } from './components/Sort/Sort';
import { Popup } from './components/Popup/Popup';
import { data } from './layout/data';

import './styles/reset.scss';
import styles from './styles/styles.module.scss';

const App: FC = () => {
  const getCart = localStorage.getItem('cart');

  const [cart, setCart] = useState<string[]>(typeof getCart === 'string' ? JSON.parse(getCart) : []);
  const [popup, setPopup] = useState<boolean>(false);

  window.onbeforeunload = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  return (
    <>
      <Header cart={cart} />
      <main className={styles.main}>
        <div className={styles.filterContainer}>
          <Search />
          <Sort />
        </div>
        <Product
          productData={data}
          cart={cart}
          setCart={setCart}
          setPopup={setPopup} />
      </main>
      <Popup popup={popup} onClick={() => setPopup(!popup)} />
    </>
  )
};

export default App;