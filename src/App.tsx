import React from 'react';

import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Filters from './components/Filters/Filters';
import Popup from './components/Popup/Popup';
import Footer from './components/Footer/Footer';

import './styles/reset.scss';
import './styles/styles.scss';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Filters />
        <Product />
      </main>
      <Footer />
      <Popup />
    </>
  );
}

export default App;
