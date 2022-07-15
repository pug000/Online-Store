import React from "react";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerContainerTitle}>Online Store</h1>
        <div className={styles.headerContainerCart}>
          <span>0</span>
        </div>
      </div>
      <div className={styles.headerLine}></div>
    </header>
  )
};

export default Header;