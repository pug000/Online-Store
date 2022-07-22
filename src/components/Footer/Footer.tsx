import React, { FC } from 'react';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLine}></div>
      <div className={styles.footerGithub}>
        <a className={styles.footerGithubLink} href='https://github.com/pug000'></a>
      </div>
      <div className={styles.footerYear}>2022</div>
      <div className={styles.footerRsschool}>
        <a className={styles.footerRsschoolLink} href='https://rs.school/js/'></a>
      </div>
    </footer>
  )
}

export default Footer;
