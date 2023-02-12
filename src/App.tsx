import { memo, useCallback, useMemo, useState } from 'react';

import getFilter from 'redux/selectors/filterSelector';

import { useAppSelector } from 'hooks/useRedux';

import { checkboxFilter, rangeFilter, searchFilter, sortFilter } from 'utils/functions';
import products from 'utils/products';

import Header from 'components/Header/Header';
import ProductsList from 'components/ProductsList/ProductsList';
import Filters from 'components/Filters/Filters';
import Popup from 'components/Popup/Popup';
import Footer from 'components/Footer/Footer';

import './styles/reset.scss';
import './styles/styles.scss';

function App() {
  const [isLimitPopupOpen, setLimitPopupOpen] = useState(false);
  const filter = useAppSelector(getFilter);

  const openLimitPopup = useCallback(() => {
    setLimitPopupOpen(true);
  }, []);

  const closeLimitPopup = useCallback(() => {
    setLimitPopupOpen(false);
  }, []);

  const filteredProducts = useMemo(
    () =>
      sortFilter(products, filter.sort).filter(
        (item) =>
          searchFilter(item.name, filter.search) &&
          rangeFilter(item.price, filter.price) &&
          rangeFilter(item.quantity, filter.quantity) &&
          checkboxFilter(item.brand, filter.brand) &&
          checkboxFilter(item.type, filter.type) &&
          checkboxFilter(item.colorEffect, filter.colorEffect)
      ),
    [filter]
  );

  return (
    <>
      <Header />
      <main className="main">
        <Filters />
        <ProductsList products={filteredProducts} openPopup={openLimitPopup} />
      </main>
      <Footer />
      <Popup
        isPopupOpen={isLimitPopupOpen}
        closePopup={closeLimitPopup}
        text="Извините, все слоты заполнены"
      />
    </>
  );
}

export default memo(App);
