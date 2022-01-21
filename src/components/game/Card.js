export default function Card(props) {

  const { card, played, chosen, clickFunc, loc, cardClass } = props;

  if (card) {
    if (played === "false") {
      if (chosen === "true") {
        cardClass += " chosen"
      }
      return (
        <div>
          <a href="#" onClick={() => clickFunc(card, loc)}>
            <img src={card.img} />
          </a>
        </div>
      );
      // if (loc) {
      //   return (
      //     <div className="card-image">
      //       <a href="#" onClick={() => clickFunc(card, loc)}>
      //         <img src={card.img} />
      //       </a>
      //     </div>
      //   );
      // } else {
      //   return (
      //     <div className="card-image">
      //       <a href="#" onClick={() => clickFunc(card)}>
      //         <img src={card.img} />
      //       </a>
      //     </div>
      //   );
      // }
    } else {
      return (
        <div className={cardClass}>
          Card {card["id"]}
        </div>
      );
    }
  }
  return "";
} 
