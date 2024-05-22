import dbConnect from "@/utils/db";
import Champion from "@/models/Champion";
import ChampionDetail from "@/components/ChampionDetail";

export async function getServerSideProps({ params }) {
    await dbConnect();
  
    const champion = await Champion.findOne({ id: params.id }).lean();
    return { props: { champion: JSON.parse(JSON.stringify(champion)) } };
  }
  
  const ChampionPage = ({ champion }) => {
    return <ChampionDetail champion={champion} />;
  };
  
  export default ChampionPage;
  