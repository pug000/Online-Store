import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';

import Product from './components/Product/Product';
import Filters from './components/Filters/Filters';

import './styles/reset.scss';
import './styles/styles.scss';
import AppLayout from './components/AppLayout/AppLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={(<AppLayout />)}>
        <Route
          index
          element={(
            <>
              <Filters />
              <Product />
            </>
          )}
        />
      </Route>
      <Route path="cart" element={(<div>Cart</div>)} />
    </Routes>
  );
}

export default App;
