import Link from 'next/link';

const ChampionsList = ({ champions }) => {
    return (
        <div>
          {champions.map(champion => (
            <div key={champion.id}>
              <Link href={`/champions/${champion.id}`}>
                <a>{champion.name}</a>
              </Link>
            </div>
          ))}
        </div>
    );
};

export default ChampionsList;