const ChampionDetail = ({ champion }) => {
    return (
      <div>
        <h1>{champion.name}</h1>
        <p>{champion.title}</p>
        <p>{champion.blurb}</p>
        <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} alt={champion.name} />
      </div>
    );
  };
  
  export default ChampionDetail;