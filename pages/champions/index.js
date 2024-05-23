import React, { useState } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChampions = champions.filter(champion =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>League of Legends Champions</h1>
      <input
        type="text"
        placeholder="Search for a champion..."
        className={styles.searchBar}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className={styles.grid}>
        {filteredChampions.map((champion) => (
          <div key={champion.id} className={styles.card}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
              alt={champion.name}
              className={styles.image}
            />
            <h2>{champion.name}</h2>
            <p>{champion.title}</p>
            <Link href={`/champions/${champion.id}`} legacyBehavior>
              <a className={styles.link}>More Details</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChampionsListPage;
