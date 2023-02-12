import ReactSlider from 'react-slider';
import type { EventHandler } from 'ts/types';

import styles from './RangeSlider.module.scss';

interface RangeSliderProps {
  title: string;
  value: number[];
  step: number;
  onChange: EventHandler<number[], void>;
  defaultValue: number[];
}

function RangeSlider({ title, value, step, onChange, defaultValue }: RangeSliderProps) {
  return (
    <div className={styles.filterRange}>
      <h2 className={styles.filterRangeTitle}>{title}</h2>
      <ReactSlider
        value={value}
        className={styles.filterSlider}
        trackClassName={styles.filterSliderTracker}
        min={defaultValue[0]}
        max={defaultValue[1]}
        minDistance={0}
        step={step}
        withTracks
        pearling={false}
        renderThumb={(props) => <div {...props} className={styles.filterSliderThumb} />}
        renderTrack={(props) => <div {...props} className={styles.filterSliderTrack} />}
        onChange={onChange}
      />
      <div className={styles.filterRangeContainer}>
        <div className={styles.filterRangeValue}>{value[0]}</div>
        <div className={styles.filterRangeValue}>{value[1]}</div>
      </div>
    </div>
  );
}

export default RangeSlider;
