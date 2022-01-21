import { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { authenticate } from '../../remote/auth-service';
import { getUserFromSession } from '../../remote/user-service';

export function LoginComponent() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  let storedUser  =  getUserFromSession ();

  let updateUsername = (e: SyntheticEvent) => {
    setUsername((e.target as HTMLInputElement).value);
  }

  let updatePassword = (e: SyntheticEvent) => {
    setPassword((e.target as HTMLInputElement).value);
  }

  let login = async () => {
    if (!username || !password) {
      setErrorMessage('You must provide a username and password!');
      return;
    }

    try {
        let principal = await authenticate({username, password});
        console.log(principal);
        window.sessionStorage.setItem("user_cached", JSON.stringify(principal));

        let storedUser  =  getUserFromSession ();
        if (storedUser ){
          window.location.reload();
        }
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  }

  return (
    storedUser ? <Navigate to="/collection"/> : 
    <div className='form'>
      <p>Log Into Your Account</p>
      <input 
        type="text" 
        id="username" 
        placeholder="Enter your username" 
        onChange={updateUsername} 
        autoFocus
        className='form-input'/>
      <input 
        type="password" 
        id="password"
        placeholder="Enter your password" 
        onChange={updatePassword}
        className='form-input' />
      <button className='form-btn' onClick={login}>LOGIN</button>
    </div>
  );
}
