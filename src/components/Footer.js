import React from 'react';
import styles from '@/styles/Footer.module.css'; // importeer CSS-modules


const Footer = () => {
  return (

    <footer className={styles.footer}>

      <div className={styles.left}>
        <h1>Home</h1>
        <h1>Stations</h1>
            <p>Centraal Station</p>
            <p>Groenplaats</p>
            <p>De singel</p>
            <p>Meir</p>
        <h1>Kaart</h1>
      </div>

      <div className={styles.right}>
        <h1>TRIPTREK</h1>
        <img src="/assets/Favicon.png"/>
      </div>

      <div className={styles.center}>
        <p>TripTrek Made by céline verschueren</p>
      </div>

    </footer>
  );
};

export default Footer;
