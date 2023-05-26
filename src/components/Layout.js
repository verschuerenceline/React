import React, { useState } from 'react';
import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className={styles.navbar}>

        <div className={`${styles["navbar-nav"]} ${isMenuOpen ? styles["open"] : ""}`}>
          <div className={styles["nav-item"]}>
            <span>Menu</span>
            <ul className={styles["dropdown-menu"]}>
              <li>
                <Link onClick={handleMenuToggle} href="/" className={styles["nav-link"]}>Home</Link>
              </li>
              <li>
                <Link onClick={handleMenuToggle} href="/about" className={styles["nav-link"]}>About</Link>
              </li>
              <li>
                <Link onClick={handleMenuToggle} href="/stations" className={styles["nav-link"]}>Stations</Link>
              </li>
              <li>
                <Link onClick={handleMenuToggle} href="/locaties" className={styles["nav-link"]}>Locaties</Link>
              </li>
            </ul>
          </div>
        </div>
        <button
          className={`${styles["navbar-toggler"]} ${isMenuOpen ? styles["open"] : ""}`}
          onClick={handleMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <main>{children}</main>
    </div>
  );
}
