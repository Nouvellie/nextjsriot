import React from 'react';
import dbConnect from '@/utils/db';
import Champion from '@/models/Champion';
import Link from 'next/link';
import styles from '../../styles/Champions.module.css';

export async function getServerSideProps() {
    await dbConnect();
    const champions = await Champion.find({}).lean();
    return { props: { champions: JSON.parse(JSON.stringify(champions)) } };
  }
  
  const ChampionsListPage = ({ champions }) => {
    return (
      <div className={styles.container}>
        <h1>League of Legends Champions</h1>
        <div className={styles.grid}>
          {champions.map((champion) => (
            <div key={champion.id} className={styles.card}>
              <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} alt={champion.name} />
              <h2>{champion.name}</h2>
              <p>{champion.title}</p>
              <Link href={`/champions/${champion.id}`} legacyBehavior>
                <a>More Details</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ChampionsListPage;