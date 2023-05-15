import Link from 'next/link'
import React, { useState } from 'react';
import styles from '@/styles/Navbar.module.css';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
   
  <>
      <nav className={styles.navbar}>
        <div className={styles.navbar}>Menu</div>
        <button
          className={`${styles["navbar-toggler"]} ${isOpen ? styles["open"] : ""}`}
          onClick={handleToggle}
        >
          <span></span>
        </button>
        <ul className={`${styles["navbar-nav"]} ${isOpen ? styles["open"] : ""}`}>
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
    </>
  )
}
