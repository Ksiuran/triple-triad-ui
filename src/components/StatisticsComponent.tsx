

export default function StatisticsComponent(props: any ) {
  return (
    <div className='stat-bar'>
        <label htmlFor="bar">{props.barName}</label>
        <progress id="bar" max="100" value={props.collectionValue}> {props.collectionValue}</progress>
    </div>
  );
}