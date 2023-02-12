import { memo, useMemo } from 'react';

import getFilter from 'redux/selectors/filterSelector';

import { useAppSelector } from 'hooks/useRedux';

import { sortFilter, searchFilter, rangeFilter, checkboxFilter } from 'utils/functions';
import products from 'utils/products';

import Filters from 'components/Filters/Filters';
import ProductsList from 'components/ProductsList/ProductsList';

interface FilterProps {
  openPopup: () => void;
}

function Filter({ openPopup }: FilterProps) {
  const filter = useAppSelector(getFilter);

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
    <main>
      <Filters />
      <ProductsList products={filteredProducts} openPopup={openPopup} />
    </main>
  );
}

export default memo(Filter);
