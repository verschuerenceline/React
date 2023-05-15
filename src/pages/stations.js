import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import useNetwork from '@/data/network';

export default function Stations() {
  const { network, isLoading, isError } = useNetwork();
  const [fietsen, setFietsen] = useState([]);
  const [plaatsen, setPlaatsen] = useState([]);
  const [filter, setFilter] = useState('');
  const [gefilterdeStations, setGefilterdeStations] = useState([]);

  useEffect(() => {
    if (network && network.stations) {
      // Haal het aantal beschikbare fietsen en plaatsen op voor elk station
      const fietsenData = network.stations.map(station => station.free_bikes);
      const plaatsenData = network.stations.map(station => station.empty_slots);

      setFietsen(fietsenData);
      setPlaatsen(plaatsenData);

      // Filter de stations op basis van de ingevoerde locatie
      const filteredStations = network.stations.filter(station =>
        station.name.toLowerCase().includes(filter.toLowerCase())
      );
      setGefilterdeStations(filteredStations);
    }
  }, [network, filter]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <h1 className={styles.title}>Stations</h1>

      <div>
        <input className={styles.zoekbalk, styles.zoekInput} type="text" placeholder="Zoek jouw locatie" value={filter} onChange={handleFilterChange} />
      </div>

      <div>
        {gefilterdeStations.map((station, index) => (
          <div key={index}>
            <h2 className={styles.title_h2}>{station.name}</h2>
            <p className={styles.p_stations}>Aantal beschikbare fietsen: {station.free_bikes}</p>
            <p className={styles.p_stations}>Aantal beschikbare plaatsen: {station.empty_slots}</p>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <img src="/assets/footer.API.png" alt="Footer Image" className={styles.footerImage} />
      </div>
    </div>
  );
}
