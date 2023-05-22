import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css'; // importeer CSS-modules


const Footer = () => {
  return (

    <footer className={styles.footer}>

      <div className={styles.left}>
        <h1>Home</h1>
        <div>
      <h1>Stations</h1>
         
    </div>
          <p>
          <Link href="/locaties">
          Centraal station  
          </Link>
          </p>

          <p>
          <Link href="/locaties">
          Groenplaats  
          </Link>
          </p>

          <p>
          <Link href="/locaties">
          De Singel  
          </Link>
          </p>
        
          <p>
          <Link href="/locaties">
          Meir  
          </Link>
          </p>

        <h1>Kaart</h1>
      </div>

      <div className={styles.right}>
        <h1>TRIPTREK</h1>
        <img src="/assets/favicon.ico"/>
      </div>

      <div className={styles.center}>
        <p>TripTrek Made by céline verschueren</p>
      </div>

    </footer>
  );
};

export default Footer;
