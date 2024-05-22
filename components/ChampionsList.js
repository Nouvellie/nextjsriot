import Link from 'next/link';

const ChampionsList = ({ champions }) => {
    if (!champions || champions.length === 0) return <p>No champions found</p>;
  
    return (
      <div>
        {champions.map(champion => (
          <div key={champion.id}>
            <Link href={`/champions/${champion.id}`}>
              {champion.name}
            </Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default ChampionsList;