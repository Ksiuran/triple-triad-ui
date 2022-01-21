import NewCard from "../models/NewCard";
import ttClient from "./TT-Client";

export const fetchCards = async () => {

  let resp = await ttClient.get('/cards/fetchall');

  if (resp.status == 401) {
    throw resp.data;
  }

  if (resp.status == 201) {
    console.log('Cards fetched');
  }
  let cardArr = resp.data as Array<NewCard>;
  cardArr.forEach(card => {
    card.img = `https://triad.raelys.com/images/cards/large/${card.id}.png`;
  });
  sessionStorage.setItem('cardList', JSON.stringify(cardArr));
}


export default fetchCards;