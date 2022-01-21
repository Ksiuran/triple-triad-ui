import GridCell from './GridCell';

export default function Grid({ cards, func }) {

  function createGridCells() {
    return cards.map((card, i) => {
      return (
        <GridCell
          key={i}
          id={i}
          card={card}
          gridCellClick={func}
          loc={null}
        />
      )
    })
  }

  return (
    <div id="grid">
      {createGridCells()}
    </div>
  );
} 
