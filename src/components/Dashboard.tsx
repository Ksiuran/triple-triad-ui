import { Navigate } from 'react-router-dom';
import StatisticsComponent from './StatisticsComponent';
import { getUserFromSession } from '../remote/user-service';

export function Dashboard() {

  let storedUser  =  getUserFromSession ();

  let logout = () => {
    window.sessionStorage.setItem("user_cached", "");
    storedUser = null;
    window.location.reload();
  }

  return (
    !storedUser ? <Navigate to="/login"/> :
      <>
        <div>
          {/* <h2>{storedUser.username} Dash:</h2>
          <button type="button" onClick={logout}>Log out</button>{' '}
          <div > 
            <h1>Welcome, {storedUser.username}!</h1>
            <h1>id, {storedUser.id}!</h1>
            <h1>AccountType, {storedUser.accountType}!</h1>
          </div>
          <StatisticsComponent barName="Test" max={JSON.parse(sessionStorage.getItem("cardList")).length} collectionValue={JSON.parse(sessionStorage.getItem("user_cached")).cardCollection.length}/> */}
        </div>
      </>
  );
}
