import dbConnect from "@/utils/db";
import Champion from "@/models/Champion";
import axios from "axios";

const ITEMS_PER_PAGE = 10;

export default async function handler(req, res) {
  await dbConnect();

  const { page = 1 } = req.query;
  const skip = (page - 1) * ITEMS_PER_PAGE;

  if (req.method === 'GET') {
    try {
      let champions = await Champion.find({}).skip(skip).limit(ITEMS_PER_PAGE);

      if (champions.length === 0) {
        console.log('No champions found in database, fetching from API');
        const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/14.10.1/data/en_US/champion.json');
        const championsData = Object.values(response.data.data);

        for (const champ of championsData) {
          await Champion.updateOne({ id: champ.id }, champ, { upsert: true });
        }

        champions = await Champion.find({}).skip(skip).limit(ITEMS_PER_PAGE);
      }

      res.status(200).json(champions);
    } catch (error) {
      console.error('Error fetching champions data:', error);
      res.status(500).json({ error: 'Error fetching champions data' });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}