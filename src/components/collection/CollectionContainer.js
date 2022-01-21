import { useState } from "react";
import BuildingDeck from "./BuildingDeck";
import Collection from "./Collection";
import ttClient from "./../../remote/TT-Client";

export default function CollectionContainer() {

  const collection = JSON.parse(sessionStorage.getItem("user_cached"))
    .cardCollection.filter(c => c != null).map(
      i => JSON.parse(sessionStorage.getItem("cardList"))[i - 1]
    );

    const [decks, setDecks] = useState([]);
    const [deck, setDeck] = useState([...Array(5)])
    const [deckName, setDeckName] = useState('');
    const [hiddenCards, setHiddenCards] = useState([]);

    function handleCardClick(card, loc) {
    if (loc === "collection") {
      hideCardInCollection(card);
      for (let i = 0; i < 5; i++) {
        if (!deck[i]) {
          deck[i] = card;
          setDeck(deck);
          break;
        }
      }
    } else {
      removeCardFromDeck(card);
      showCardInCollection(card);
    }
  }

  function hideCardInCollection(card) {
    const change = [
      ...hiddenCards,
      card,
    ]
    setHiddenCards(change);
  }

  function showCardInCollection(card) {
    const change = remove(hiddenCards, card)
    setHiddenCards(change)
  }

  function removeCardFromDeck(card) {
    for (let i = 0; i < 5; i++) {
      if (deck[i] && deck[i].id === card.id) {
        deck[i] = null;
        setDeck(deck);
        break;
      }
    }
  }

  function remove(group, item) {
    const idx = group.findIndex(itm => itm.id === item.id);
    return [
      ...group.slice(0, idx),
      ...group.slice(idx + 1),
    ]
  }

  function filterCollection() {
    return collection.filter(card => 
      !hiddenCards.find(crd => crd.id === card.id)
    )
  }

  function saveDeck(name) {
    const deckSize = deck.length;
    if (deckSize === 5) {
      const array = deck.map(card => card.id);
      const result = {
        deckName: name,
        cards: array,
        deckOwner: JSON.parse(sessionStorage.getItem("user_cached")).id,
      };
      ttClient.post("/deck/save", result).then(() => {
        setDeck([]);
        setHiddenCards([]);
      })
    }
  }

  return (
    <div id="collection-container">
      <BuildingDeck
        played="false"
        cardClickFunc={handleCardClick}
        deck={deck}
        setDeck={setDeck}
        decks={decks}
        setDecks={setDecks}
        deckName={deckName}
        setDeckName={setDeckName}
        saveDeck={saveDeck}
        setHiddenCards={setHiddenCards}
      />
      <Collection
        collection={filterCollection()}
        func={handleCardClick}
        cardClass="card-image"
      />
    </div>
  );
} 
