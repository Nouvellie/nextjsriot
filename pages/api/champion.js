import dbConnect from "@/utils/db";
import Champion from "@/models/Champion";

export default async function handler(req, res) {
    await dbConnect();
  
    const { id } = req.query;
    try {
      const champion = await Champion.findOne({ id });
  
      if (champion) {
        res.status(200).json(champion);
      } else {
        res.status(404).json({ message: 'Champion not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching champion data' });
    }
  }