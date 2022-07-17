import React, { FC } from 'react';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLine}></div>
      <div className={styles.footerLeft}>
        <a className={styles.footerLeftGithub} href='https://github.com/pug000'>
          <div className={styles.footerLeftGithubLogo}></div>
        </a>
      </div>
      <div className={styles.footerMiddle}>
        <p className={styles.footerMiddleYear}>2022</p>
      </div>
      <div className={styles.footerRight}>
        <a className={styles.footerRightRsschool} href='https://rs.school/js/'>
          <div className={styles.footerRightRsschoolLogo}></div>
        </a>
      </div>
    </footer>
  )
}
