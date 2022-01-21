import NewCard from "../models/NewCard";
import ttClient from "./TT-Client";

export const getDeck = async () => {
console.log(`/deck/fetch/${JSON.parse(sessionStorage.getItem("user_cached")).id}`)
  let resp = await ttClient.get(`/deck/fetch/${JSON.parse(sessionStorage.getItem("user_cached")).id}`);
console.log(resp)
  if (resp.status == 401) {
    throw resp.data;
  }

  if (resp.status == 200) {
    console.log('Deck fetched');
  }

  return resp.data;
}

export default getDeck;
