import Card from "./../game/Card";

export default function Collection({ collection, func, cardClass }) {

  function renderCollection() {
    return collection.map(card => {
      return (
        <Card
          key={card.id}
          card={card}
          player="1"
          played="false"
          chosen="false"
          clickFunc={func}
          loc="collection"
          cardClass={cardClass}
        />
      )
    })
  }

  return (
    <div id="collection">
      {renderCollection()}
    </div>
  );
} 
