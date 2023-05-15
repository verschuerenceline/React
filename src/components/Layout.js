import React, { useState } from 'react';
import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navbar}></div>
        <button
          className={`${styles["navbar-toggler"]} ${isMenuOpen ? styles["open"] : ""}`}
          onClick={handleMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`${styles["navbar-nav"]} ${isMenuOpen ? styles["open"] : ""}`}>
          <li className={styles["nav-item"]}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/stations">Stations</Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/locaties">Locaties</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
