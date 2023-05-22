import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import useNetwork from '@/data/network';

export default function Locaties() {
  const { network, isLoading, isError } = useNetwork();
  const [huidigeLocatie, setHuidigeLocatie] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setHuidigeLocatie({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Fout</div>;

  const stations = network.stations;

  const berekenAfstand = (lat1, lon1, lat2, lon2) => {
    const aardeStraal = 6371; // Straal van de aarde in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const afstand = aardeStraal * c;

    return afstand.toFixed(2); // Afstand afronden tot 2 decimalen
  };

  const toRadians = (graden) => {
    return graden * (Math.PI / 180);
  };

  return (

    
    <div>
      <h1 className={styles.title}>Locaties</h1>
      {huidigeLocatie && (
        <p>Je huidige locatie: {huidigeLocatie.latitude} km, {huidigeLocatie.longitude} km</p>
      )}
      <ul>
        {stations.map(station => (
          <li key={station.id}>
            <h2 className={styles.title_h2}>{station.name}</h2>
            <p className={styles.p_locaties}>Breedtegraad: {station.latitude} km</p>
            <p className={styles.p_locaties}>Lengtegraad: {station.longitude} km</p>
            {huidigeLocatie && (
              <p>Afstand tot huidige locatie: {berekenAfstand(
                huidigeLocatie.latitude,
                huidigeLocatie.longitude,
                station.latitude,
                station.longitude
              )} km</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
