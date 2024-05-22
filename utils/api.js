import axios from "axios";

const API_KEY = 'RGAPI-865ae150-d2d1-44ae-9723-1cc0fe149405'
const API_URL = 'https://na1.api.riotgames.com/lol/static-data/v3'

export const fetchChampions = async () => {
    console.log("ERROR", `${API_URL}/champions?api_key=${API_KEY}`);
    // const response = await axios.get(`${API_URL}/champions?api_key=${API_KEY}`);
    const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/14.10.1/data/en_US/champion.json');
    const data = JSON.parse(JSON.stringify(response.data));
    console.log("RPS",data)
    return data;
    //return response.data;
};

export const fetchCahmpionsDetails = async (id) => {
    const response = await axios.get(`${API_URL}/champions/${id}?api_key=${API_KEY}`);
    return response.data;
}