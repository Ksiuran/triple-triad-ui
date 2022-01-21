import Score from './Score';

export default function StatusBar({ status }) {
  return (
    <div id="status-bar">
      <Score id="player-1-score" num={status.player1} />
      {status.message}
      <Score id="player-2-score" num={status.player2} />
    </div>
  );
} 
