import React from "react";
import Header from './components/Header/Header';
import Product from "./components/Product/Product";

import styles from './styles/styles.module.scss';

const App: React.FC = () => {

  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <div className={styles.filterContainer}></div>
        <Product></Product>
      </main>
    </>
  )
};

export default App;