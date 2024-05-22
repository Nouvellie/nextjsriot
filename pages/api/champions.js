import dbConnect from "@/utils/db";
import Champion from "@/models/Champion";
import axios from "axios";

export default async function handler(req, res) {
    await dbConnect();
    if (req.method === 'GET') {
        const champions = await Champion.find({});
        if (champions.length === 0) {
            const response = await axios.get(`https://na1.api.riotgames.com/lol/static-data/v3/champions?api_key=${process.env.RIOT_API_KEY}`);
            const championsData = response.data.data;
            for (const champKey in championsData) {
                const champ = championsData[champKey];
                await Champion.create(champ);
            }
        }
        const updatedChampions = await Champion.find({});
        res.status(200).json(updatedChampions);
    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}