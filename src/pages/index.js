import React from 'react';
import Image from 'next/image';
import ButtonInfo from '../components/ButtonInfo';
import Footer from '../components/Footer';
import styles from '@/styles/Home.module.css';


export default function Home() {
  const handleClick = () => {
  }; 


  return (
    <>

      <div>
        <Image src="/assets/womenandbike.png" alt="Mijn afbeelding" width={420} height={600} />
      </div>
      <h1 className={styles.title}>Welkom bij TriptTrek</h1>
      <p className={styles.text}> TripTrek is dé app voor toeristen die Antwerpen willen verkennen. Of je nu op zoek bent naar de beste cafés, de mooiste uitzichten of de verborgen pareltjes van de stad, TripTrek wijst je de weg. Met deze app vind je makkelijk de beste routes.</p>
    
      <div className="MyComponent">
        <ButtonInfo label="Lees meer over TripTrek" onClick={handleClick} className={styles.buttonleesmeer}/>
      </div>

      <h1 className={styles.title}>Populaire stations</h1>

      <div className="MyComponent">
        <ButtonInfo label="Bekijk alle stations" onClick={handleClick} className={styles.buttonallestations}/>
      </div>

      <div>
        <Image src="/assets/route.png" alt="Mijn afbeelding" width={420} height={600} />
      </div>
     
     <div>
      <Footer></Footer>
     </div>

    </>

  
  );
}
