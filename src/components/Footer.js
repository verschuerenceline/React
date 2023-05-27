import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css'; 


const Footer = () => {
  return (

    <footer className={styles.footer}>

      <div className={styles.left}>
        <h1>Home</h1>
        <div>
      <h1>Stations</h1>
         
    </div>
          <p>
          <Link href="/locaties" className={styles["footer-link"]}>
          Centraal station  
          </Link>
          </p>

          <p>
          <Link href="/locaties" className={styles["footer-link"]}>
          Groenplaats  
          </Link>
          </p>

          <p>
          <Link href="/locaties" className={styles["footer-link"]}>
          De Singel  
          </Link>
          </p>
        
          <p>
          <Link href="/locaties" className={styles["footer-link"]}>
          Meir  
          </Link>
          </p>

        <h1>Kaart</h1>
      </div>

      <div className={styles.right}>
        <h1>TRIPTREK</h1>
        <img src="/assets/favicon.png"/>
      </div>

      <div className={styles.center}>
        <p>TripTrek Made by céline verschueren</p>
      </div>

    </footer>
  );
};

export default Footer;
