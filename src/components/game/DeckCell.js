import Card from './Card';

export default function DeckCell({ card, chosen, func, pos }) {

  function renderCard() {
    return (
      <Card
        card={card}
        played="false"
        chosen={chosen}
        clickFunc={func}
        loc={null}
      />
    );
  }

  const klass = `deck-cell deck-cell-${pos}`

  return (
    <div className={klass}>
      {renderCard()}
    </div>
  );
} 
