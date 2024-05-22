import dbConnect from "@/utils/db";
import Champion from "@/models/Champion";

export default async function handler(req, res) {
    await dbConnect();
  
    const { id } = req.query;
    const champion = await Champion.findOne({ id });
  
    if (champion) {
      res.status(200).json(champion);
    } else {
      res.status(404).json({ message: 'Champion not found' });
    }
  }