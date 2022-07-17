import React, { FC } from 'react'
import { optionsLayout } from '../../layout/data';
import { FiltersProps } from '../../ts/interfaces';
import { Search } from './Search/Search';
import { SelectedSort } from './SelectedSort/SelectedSort';

import styles from './Filters.module.scss';

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
    </div>
  )
}
