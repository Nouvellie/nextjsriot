import dbConnect from "@/utils/db";
import Champion from "@/models/Champion";
import ChampionDetail from "@/components/ChampionDetail";

export async function getServerSideProps({ params }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/champion?id=${params.id}`);
    const champion = await res.json();
  
    return { props: { champion } };
  }
  
  const ChampionPage = ({ champion }) => {
    return <ChampionDetail champion={champion} />;
  };
  
  export default ChampionPage;