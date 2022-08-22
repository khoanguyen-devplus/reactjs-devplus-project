import axios from "axios";

const API_ROOT = "http://localhost:5000";

const client = axios.create({
    baseURL: API_ROOT,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  
export const getBanner = async () => {
    return await client.get("/banner");
}