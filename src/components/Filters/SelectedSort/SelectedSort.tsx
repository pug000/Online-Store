import type { Options } from 'ts/interfaces';
import type { EventHandler } from 'ts/types';

import styles from './SelectedSort.module.scss';

interface SelectedSortProps {
  value: string;
  onChange: EventHandler<React.ChangeEvent<HTMLSelectElement>, void>;
  options: Readonly<Options[]>;
}

function SelectedSort({ value, options, onChange }: SelectedSortProps) {
  return (
    <div className={styles.sort}>
      <h2 className={styles.sortTitle}>Сортировка</h2>
      <select className={styles.sortSelect} value={value} onChange={onChange}>
        {options.map(({ id, option }) => (
          <option className={styles.sortSelectOption} key={id} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectedSort;
