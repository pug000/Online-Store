import React, {
  useMemo,
  useState
} from 'react';

import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Filters from './components/Filters/Filters';
import Popup from './components/Popup/Popup';
import Footer from './components/Footer/Footer';

import dataLayout from './layout/data';
import {
  getLocalStorage,
  setLocalStorage
} from './local';
import {
  checkboxFilter,
  maxPrice,
  maxQuantity,
  minPrice,
  minQuantity,
  rangeFilter,
  searchFilter,
  sortFilter
} from './settings';

import OptionValue from './ts/enum';
import {
  FilterState,
  ProductData
} from './ts/interfaces';

import './styles/reset.scss';
import './styles/styles.scss';

function App() {
  const defaultFilter: FilterState = {
    search: '',
    sort: OptionValue.AZ,
    price: [minPrice, maxPrice],
    quantity: [minQuantity, maxQuantity],
    brand: [],
    type: [],
    colorEffect: [],
  };
  const [data, setData] = useState<ProductData[]>(dataLayout);
  const [filter, setFilter] = useState<FilterState>(getLocalStorage('filters', defaultFilter));

  useMemo(() => {
    const res = sortFilter(dataLayout, filter.sort)
      .filter((item) => searchFilter(item.name, filter.search)
        && rangeFilter(item.price, filter.price)
        && rangeFilter(item.quantity, filter.quantity)
        && checkboxFilter(item.brand, filter.brand)
        && checkboxFilter(item.type, filter.type)
        && checkboxFilter(item.colorEffect, filter.colorEffect));

    setData(res);
  }, [filter]);

  window.onbeforeunload = () => {
    setLocalStorage('filters', { ...filter, search: '' });
  };

  return (
    <>
      <Header />
      <main className="main">
        <Filters
          filter={filter}
          setFilter={setFilter}
          defaultFilter={defaultFilter}
        />
        <Product products={data} />
      </main>
      <Footer />
      <Popup />
    </>
  );
}

export default App;
