import mongoose from "mongoose";

const ChampionSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    title: String,
    blurb: String,
    image: Object,
    tags: [String],
  });
  
  export default mongoose.models.Champion || mongoose.model('Champion', ChampionSchema);