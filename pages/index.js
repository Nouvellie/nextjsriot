import React, { useState } from 'react';
import dbConnect from "@/utils/db";
import Champion from "@/models/Champion";
import ChampionsList from "@/components/ChampionsList";

export async function getServerSideProps(context) {
    const { page = 1 } = context.query;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/champions?page=${page}`);
    const champions = await res.json();
  
    return {
      props: { champions, page: parseInt(page, 10) },
    };
  }
  
  const Home = ({ champions, page }) => {
    const [currentPage, setCurrentPage] = useState(page);
  
    const handleNextPage = () => {
      setCurrentPage(prevPage => prevPage + 1);
    };
  
    const handlePreviousPage = () => {
      setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };
  
    return (
      <div>
        <ChampionsList champions={champions} />
        <div>
          {currentPage > 1 && <button onClick={handlePreviousPage}>Previous</button>}
          <button onClick={handleNextPage}>Next</button>
        </div>
      </div>
    );
  };
  
  export default Home;