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
    <div className={`container ${styles.container}`}>
      <h1 className={styles.title}>Champions</h1>
      <input
        type="text"
        placeholder="Search for a champion..."
        className={`form-control ${styles.searchBar}`}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className={styles.grid}>
        {filteredChampions.map((champion) => (
          <div key={champion.id} className={`card ${styles.card}`}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
              alt={champion.name}
              className={`card-img-top ${styles.image}`}
            />
            <div className="card-body text-center">
              <h2 className="card-title">{champion.name}</h2>
              <p className="card-text">{champion.title}</p>
              <Link href={`/champions/${champion.id}`} legacyBehavior>
                <a className={`btn btn-primary ${styles.link}`}>More Details</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChampionsListPage;
