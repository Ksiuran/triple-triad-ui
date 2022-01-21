import { NavLink } from 'react-router-dom';
import GridCell from './GridCell';
import DeckCell from './DeckCell';
import { useEffect, useState } from "react";
import getDeck from '../../remote/getDeck';

export default function Deck({ klass, cards, player, played, chosenCard, func, saveDeck, deck, deckName, decks, setDeck, setDeckName, setDecks }) {

  const getDecks = async () => {
    const response = await getDeck();
    setDecks(response)
  }

  useEffect(() => getDecks(), [])

  function renderDeckCells() {
    // console.log(deck, decks)
    let position = 1;
    return deck.map((el, i) => {
      let chosen;
      if (chosenCard && cards[i].id === chosenCard.id) {
        chosen = "true";
      } else {
        chosen = "false";
      }
      if (klass === "collection-deck") {
        return (
          <GridCell
            key={i}
            id={i}
            card={cards[i]}
            played={played}
            clickFunc={func}
            loc="deck"
          />
        )
      } else {
        return (
          <DeckCell
            key={i}
            card={cards[i]}
            chosen={chosen}
            func={func}
            pos={position++}
          />
        );
        }
    });
  }

  function handleDeckClick(d) {
    console.log(d)
    setDeck(d.cards)
    console.log(d)
    console.log(d.cards)
  }

  function renderDeckList() {
    if (decks.length > 0) {
      return (
        <div id='deck-list'>
          {decks.map(deck => (
            <button 
              key={deck.id}
              type='button' 
              id='deck-list-btn'
              onClick={() => handleDeckClick(deck)}
            >{deck.deckName}
            </button>
          ))}
        </div>
      )
    } else {
      return (
        <div id='deck-list'>No Saved Decks</div>
      )
    }
  }

  function handleChange(e) {
    setDeckName(e.target.value);
  }

  function renderSaveButton() {
    if (klass === "collection-deck") {
      return (
        <>
          <input
            id="deck-name"
            type="text"
            name="deckName"
            onChange={(e) => handleChange(e)}
            value={deckName}
            maxLength="20"
            autoFocus
            required
          />
          <NavLink id="save-button" to="#" onClick={() => saveDeck(deckName)}>
            SAVE
          </NavLink>
        </>
      )
    }
  }

  const id = `deck-${player}`

  return (
    <div id={id} className={klass}>
      {renderDeckCells()}
      <div id='deck-form'>
        {renderDeckList()}
        {renderSaveButton()}
      </div>
    </div>
  );
} 
