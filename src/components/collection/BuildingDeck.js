import { NavLink } from 'react-router-dom';
import BuildingDeckCell from './BuildingDeckCell';
import { useEffect } from "react";
import getDeck from '../../remote/getDeck';
import ttClient from '../../remote/TT-Client';

export default function Deck({ played, cardClickFunc, saveDeck, deck, setDeck, decks, setDecks, deckName, setDeckName, setHiddenCards }) {

  const getDecks = async () => {
    const response = await getDeck();
    setDecks(response)
  }

  useEffect(() => getDecks(), [])

  function renderDeckCells() {
    if (deck.length === 0) {deck = [...Array(5)]};
    return deck.map((el, i) => {
      return (
        <BuildingDeckCell
          key={i}
          card={deck[i]}
          played={played}
          cardClickFunc={cardClickFunc}
        />
      )
    });
  }

  function handleDeckClick(d) {
    const newCards = d.cards.map(i => JSON.parse(sessionStorage.getItem("cardList"))[i-1]);
    setHiddenCards(newCards)
    setDeck(newCards)
  }

  function remove(group, item) {
    const idx = group.findIndex(itm => itm.id === item.id);
    return [
      ...group.slice(0, idx),
      ...group.slice(idx + 1),
    ]
  }

  function renderDeckList() {
    if (decks.length > 0) {
      return (
        <div id='deck-list'>
          {decks.map(deck => (
            <>
              <button 
                key={deck.id}
                type='button' 
                className='deck-list-btn'
                onClick={() => handleDeckClick(deck)}
              >{deck.deckName}
              </button>
              <button className='close' onClick={async () => {
                await ttClient.post(`/deck/delete/${deck.id}`);
                setDecks(remove(decks, deck));
              }}>&times;</button>
            </>
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
        <NavLink 
          id="save-button" 
          to="#" 
          onClick={() => saveDeck(deckName)}
        >
          SAVE
        </NavLink>
      </>
    )
  }

  return (
    <div className="collection-deck">
      {renderDeckCells()}
      <div id='deck-form'>
        {renderDeckList()}
        {renderSaveButton()}
      </div>
    </div>
  );
} 
