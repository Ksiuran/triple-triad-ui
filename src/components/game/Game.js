import { useState } from 'react';
import GameDeck from './GameDeck';
import Grid from './Grid';
import StatusBar from './StatusBar';

let cardList = JSON.parse(sessionStorage.getItem('cardList'));

export default function Game() {

  const deck1 = [
    {"id": "1", "player": "1"},
    {"id": "2", "player": "1"},
    {"id": "3", "player": "1"},
    {"id": "4", "player": "1"},
    {"id": "5", "player": "1"},
  ];
  const deck2 = [
    {"id": "1", "player": "2"},
    {"id": "2", "player": "2"},
    {"id": "3", "player": "2"},
    {"id": "4", "player": "2"},
    {"id": "5", "player": "2"},
  ];
  const status = {player1: "5", player2: "5", message: "[BIG SHOT]'s turn!"}

  const [chosenCard, setChosenCard] = useState(null);
  const [playedCards, setPlayedCards] = useState([...Array(9)]);
  const [player1Deck, setPlayer1Deck] = useState(deck1);
  const [player2Deck, setPlayer2Deck] = useState(deck2);

  function handleCardClick(card) {
    setChosenCard(card);
  }

  function removeCard(deck, card) {
    const cardIdx = deck.findIndex(crd => crd.id === card.id);
    return [
      ...deck.slice(0, cardIdx),
      ...deck.slice(cardIdx + 1),
    ]
  }

  function removeCardFromDeck(card) {
    let update;
    if (card.player === "1") {
      update = removeCard(player1Deck, card);
      setPlayer1Deck(update);
    } else {
      update = removeCard(player2Deck, card);
      setPlayer2Deck(update);
    }
  }

  function handleGridCellClick(cell) {
    if (chosenCard) {
      removeCardFromDeck(chosenCard);
      let change = [
        ...playedCards.slice(0, cell),
        chosenCard,
        ...playedCards.slice(cell + 1),
      ]
      setPlayedCards(change);
      setChosenCard(null);
    }
  }

  function isChosenCardPresent(player) {
    if (chosenCard && chosenCard.player === player) {
      return chosenCard;
    }
    return null;
  }

  return (<>
    <div id="game">
      <Grid cards={playedCards} func={handleGridCellClick} />
      <StatusBar status={status} />
      <GameDeck
        cards={player1Deck}
        player="1"
        chosenCard={isChosenCardPresent("1")}
        func={handleCardClick}
        klass="game-deck"
      />
      <GameDeck
        cards={player2Deck}
        player="2"
        chosenCard={isChosenCardPresent("2")}
        func={handleCardClick}
        klass="game-deck"
      />
    </div>
    </>
  );
} 
