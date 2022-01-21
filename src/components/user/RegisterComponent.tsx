import { SyntheticEvent, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import User from "../../models/User";
import { register } from '../../remote/user-service';

interface IRegisterProps {
  aUser: User | undefined,
  setAUser: (aUser: User| undefined) => void
}

export function RegisterComponent() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [matchingPassword, setMatchingPassword] = useState('');

  const stored = window.sessionStorage.getItem("user_cached");

  let updateUsername = (e: SyntheticEvent) => {
    setUsername((e.target as HTMLInputElement).value);
  }

  let updatePassword = (e: SyntheticEvent) => {
    setPassword((e.target as HTMLInputElement).value);
  }

  let updateMatchingPassword = (e: SyntheticEvent) => {
    setMatchingPassword((e.target as HTMLInputElement).value);
  }

  let regNewUser = async () => {
    // --- test
    // setUsername ( "aaaa");
    // setPassword ( "a1aaDa#aaa");
    // setMatchingPassword ( "a1aaDa#aaa");
    // --- test //

    if (!username || !password || !matchingPassword) {
      setErrorMessage('You must provide a username and password!');
      return;
    }

    if(password != matchingPassword){
      setErrorMessage('You must enter a matching password');
      return;
    }

    try {
      let principal = await register({username, password, matchingPassword});
      window.sessionStorage.setItem("user_cached", JSON.stringify(principal));
      navigate("/collection");
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  }

  return (
    stored ? <Navigate to="/collection"/> : 
    <div className='form'>
      <p>Create A New Account</p>
      <input
        type="text"
        id="username"
        className='form-input'
        placeholder="Enter your username"
        onChange={updateUsername}
        autoFocus/>
      <input
        type="password"
        id="password"
        className='form-input'
        placeholder="Enter your password"
        onChange={updatePassword}/>
      <input
        type="password"
        id="matchingPassword"
        className='form-input'
        placeholder="Renter your password"
        onChange={updateMatchingPassword}/>
      <button className='form-btn' onClick={regNewUser}>CREATE</button>
    </div>
  );

}
