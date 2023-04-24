import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div>
      <Image src="/assets/womenandbike.png" alt="Mijn afbeelding" width={399} height={609} />
    </div>
      <h1>Welkom bij TriptTrek</h1>
      <p>TripTrek is dé app voor toeristen die Antwerpen willen verkennen. Of je nu op zoek bent naar de beste cafés, de mooiste uitzichten of de verborgen pareltjes van de stad, TripTrek wijst je de weg. Met deze app vind je makkelijk de beste routes.</p>
    </div>
  )
}
