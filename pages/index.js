import dbConnect from "@/utils/db";
import Champion from "@/models/Champion";
import ChampionsList from "@/components/ChampionsList";

export async function getServerSideProps() {
    await dbConnect();
  
    const champions = await Champion.find({}).lean();
    return { props: { champions: JSON.parse(JSON.stringify(champions)) } };
  }
  
  const Home = ({ champions }) => {
    return <ChampionsList champions={champions} />;
  };
  
  export default Home;