import styles from '@/styles/Home.module.css'
import {userState} from 'react';
import useNetwork from '@/data/network'

export default function About() {
  const { network, isLoading, isError } = useNetwork()
 
  if (isLoading) return <div>Loading...</div>
  if (isError) return<div>Error</div>

  const stations = network.stations;
 
  return (
    
    <div>
        <h1 className={styles.title}>About {network.name}</h1>
            <p className={styles.text}>TripTrek is dé app voor toeristen die Antwerpen willen verkennen. Of je nu op zoek bent naar de beste cafés, de mooiste uitzichten of de verborgen pareltjes van de stad, TripTrek wijst je de weg. Met deze app vind je makkelijk de beste routes.
            Of je nu een fiets wilt huren bij een van onze populaire stations of een van de voorgestelde routes wilt volgen, TripTrek maakt het allemaal mogelijk. Onze app biedt een gebruiksvriendelijke interface en betrouwbare informatie, zodat je optimaal kunt genieten van je verblijf in Antwerpen. Ontdek de stad op jouw manier met Triptrek!</p>

    </div>
  )
}

