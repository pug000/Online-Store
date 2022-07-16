import React, { FC, useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Product } from './components/Product/Product';
import { Search } from './components/Search/Search';
import { SelectedSort } from './components/SelectedSort/SelectedSort';
import { Popup } from './components/Popup/Popup';
import { dataLayout, optionsLayout } from './layout/data';
import { ProductData } from './ts/interfaces';
import { getLocalStorage, setLocalStorage } from './local';
import { OptionValue } from './ts/enum';

import './styles/reset.scss';
import styles from './styles/styles.module.scss';

const App: FC = () => {
  const [cart, setCart] = useState<string[]>(getLocalStorage('cart', []));
  const [data, setData] = useState<ProductData[]>(dataLayout)
  const [popup, setPopup] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>(getLocalStorage('sort', 'По названию (A-Z)'));

  const sortData = (sort: string) => {
    setSelectedSort(sort);
    switch (sort) {
      case OptionValue.first:
        return setData([...data].sort((a, b) => b.name.localeCompare(a.name)));
      case OptionValue.second:
        return setData([...data].sort((a, b) => Number(a.price) - Number(b.price)));
      case OptionValue.third:
        return setData([...data].sort((a, b) => Number(b.price) - Number(a.price)));
      case OptionValue.fourth:
        return setData([...data].sort((a, b) => Number(b.count) - Number(a.count)));
      case OptionValue.fifth:
        return setData([...data].sort((a, b) => Number(a.count) - Number(b.count)));
      default:
        return setData([...data].sort((a, b) => a.name.localeCompare(b.name)));
    }
  }

  useEffect(() => {
    sortData(selectedSort);
  }, [selectedSort])

  window.onbeforeunload = () => {
    setLocalStorage('cart', cart);
    setLocalStorage('sort', selectedSort);
  }

  return (
    <>
      <Header cart={cart} />
      <main className={styles.main}>
        <div className={styles.filterContainer}>
          <Search />
          <SelectedSort
            optionsLayout={optionsLayout}
            value={selectedSort}
            onChange={sortData}
          />
        </div>
        {data.length
          ? <Product
            productData={data}
            cart={cart}
            setCart={setCart}
            setPopup={setPopup} />
          : <div className={styles.noResultWrapper}>
            <h2 className={styles.noResultWrapperTitle}>{'Извините, совпадений не обнаружено'}</h2>
          </div>}
      </main>
      <Popup popup={popup} onClick={() => setPopup(!popup)} />
    </>
  )
};

export default App;
