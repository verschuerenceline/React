import styles from '@/styles/Home.module.css'
import {userState} from 'react';
import useNetwork from '@/data/network'

export default function Stations() {
    const { network, isLoading, isError } = useNetwork()
   
    if (isLoading) return <div>Loading...</div>
    if (isError) return<div>Error</div>
  
    const stations = network.stations;
   
    return (
      
      <div>
          <h1 className={styles.title}>Stations</h1>
              
      </div>
    )
  }
  
  