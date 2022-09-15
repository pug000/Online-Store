import React from 'react';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLine} />
      <div className={styles.footerGithub}>
        <a
          className={styles.footerGithubLink}
          href="https://github.com/pug000"
          aria-hidden="true"
        />
      </div>
      <div className={styles.footerYear}>2022</div>
      <div className={styles.footerRsschool}>
        <a
          className={styles.footerRsschoolLink}
          href="https://rs.school/js/"
          aria-hidden="true"
        />
      </div>
    </footer>
  );
}

export default Footer;
