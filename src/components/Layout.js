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
    <div className={`${styles["navbar-nav"]} ${isMenuOpen ? styles["open"] : ""}`}>
      <div className={styles["nav-item"]}>
        <span>Menu</span>
        <ul className={styles["dropdown-menu"]}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/stations">Stations</Link>
          </li>
          <li>
            <Link href="/locaties">Locaties</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main>{children}</main>
</div>

  );
}
