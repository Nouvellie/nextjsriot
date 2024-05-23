import React from 'react';
import Link from 'next/link';
import dbConnect from '@/utils/db';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  await dbConnect();
  await axios.get('http://localhost:3000/api/champions');
  
  return {
    props: {},
  };
}
  
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input type="text" className={styles.searchBar} placeholder="Search..." />
      </div>
    </div>
  );
};

export default Home;