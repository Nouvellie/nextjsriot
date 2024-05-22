import React from 'react';
import Link from 'next/link';
import dbConnect from '@/utils/db';
import axios from 'axios';

export async function getServerSideProps() {
    await dbConnect();
    await axios.get('http://localhost:3000/api/champions');
    
    return {
      props: {},
    };
  }
  
  const Home = () => {
    return (
      <div>
        <h1>Welcome to the League of Legends Champions</h1>
        <Link href="/champions" legacyBehavior>
          <a>View Champions</a>
        </Link>
      </div>
    );
  };
  
  export default Home;