import axios from "axios";

const baseURL: string | undefined= process.env.REACT_APP_CHIMONEY_API;
const apiKey: string | undefined = process.env.REACT_APP_CHIMONEY_API_KEY;

export default axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
    'Authorization':apiKey 
  }
});