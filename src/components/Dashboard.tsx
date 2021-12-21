import { Navigate } from 'react-router-dom';
import PrincipalExtension from "./../models/PrincipalExtension";
import User from '../models/User';
import { stat } from 'fs/promises';
import StatisticsComponent from './StatisticsComponent';
import updateUser from '../remote/updateUser';

interface IDashboardProps {
  aUser: User | undefined,
  setAUser: (aUser: User| undefined) => void
}

export function Dashboard(props: IDashboardProps) {
  if(!props.aUser){
    const stored =  window.sessionStorage.getItem("user_cached");
    if (stored) {
      props.setAUser(JSON.parse(stored));
      console.log(props.aUser);
  }
}

//updateUser(props);


let logout = () => {
  window.sessionStorage.setItem("user_cached", "");
  window.location.reload();
}

return (
  !props.aUser ? <Navigate to="/login"/> :
    <>
      <div>
        <h2>{props.aUser.username} Dash:</h2>
        <button type="button" onClick={logout}>Log out</button>{' '}
        <div > 
          <h1>Welcome, {props.aUser.username}!</h1>
          <h1>id, {props.aUser.id}!</h1>
          <h1>AccountType, {props.aUser.accountType}!</h1>
        </div>
        <StatisticsComponent barName="Test" max={JSON.parse(sessionStorage.getItem("cardList")).length} collectionValue={JSON.parse(sessionStorage.getItem("user_cached")).cardCollection.length}/>
      </div>
    </>
  );
}
