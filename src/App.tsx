import React from 'react';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';

import styles from './styles/styles.module.scss';

const App: React.FC = () => {

  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <div className={styles.filterContainer}>
          <Search></Search>
          <Sort></Sort>
        </div>
        <Product></Product>
      </main>
    </>
  )
};

export default App;