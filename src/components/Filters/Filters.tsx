import React, { FC } from 'react'
import { optionsLayout } from '../../layout/data';
import { FiltersProps } from '../../ts/interfaces';
import { Search } from './Search/Search';
import { SelectedSort } from './SelectedSort/SelectedSort';
import { RangeSlider } from './RangeSlider/RangeSlider';

import styles from './Filters.module.scss';
import { maxPrice, maxQuantity, minPrice, minQuantity } from '../../settings';

export const Filters: FC<FiltersProps> = (
  {
    filter,
    setFilter
  }
) => {
  return (
    <div className={styles.filterContainer}>
      <Search
        value={filter.search}
        onChange={e => setFilter({ ...filter, search: e })}
      />
      <SelectedSort
        value={filter.sort}
        onChange={selectedValue => setFilter({ ...filter, sort: selectedValue })}
        optionsLayout={optionsLayout} />
      <RangeSlider
        value={filter.price}
        step={10}
        onChange={(value) => setFilter({ ...filter, price: value })}
        defaultValue={[minPrice, maxPrice]}
      />
      <RangeSlider
        value={filter.quantity}
        step={1}
        onChange={(value) => setFilter({ ...filter, quantity: value })}
        defaultValue={[minQuantity, maxQuantity]}
      />
    </div>
  )
}
