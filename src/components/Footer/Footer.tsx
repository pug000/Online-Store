import { memo } from 'react';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.line} />
      <div className={styles.github}>
        <a
          className={`${styles.githubLink} ${styles.link}`}
          href="https://github.com/pug000"
          aria-hidden="true"
        />
      </div>
      <div className={styles.year}>2022</div>
      <div className={styles.rsschool}>
        <a
          className={`${styles.rsschoolLink} ${styles.link}`}
          href="https://rs.school/js/"
          aria-hidden="true"
        />
      </div>
    </footer>
  );
}

export default memo(Footer);
