import mongoose from "mongoose";

const ChampionSchema = new mongoose.Schema({
    id: String,
    name: String,
    title: String,
    blurb: String,
    image: Object,
    tags: [String],
});

export default mongoose.models.Champion || mongoose.model('Champion', ChampionSchema);