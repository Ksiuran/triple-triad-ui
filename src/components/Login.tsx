// import { SyntheticEvent, useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import Principal from '../models/Principal';
// import authenticate from '../remote/auth-service';

// interface ILoginProps {
//   currentUser: Principal | undefined,
//   setCurrentUser: (nextUser: Principal| undefined) => void
// }

//export default function Login(props: ILoginProps) {
export default function Login() {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  // let updateUsername = (e: SyntheticEvent) => {
  //   setUsername((e.target as HTMLInputElement).value);
  // }

  // let updatePassword = (e: SyntheticEvent) => {
  //   setPassword((e.target as HTMLInputElement).value);
  // }

  // let login = async () => {
  //   try {
  //     let principal = await authenticate({username, password});
  //     console.log(principal);
  //     props.setCurrentUser(principal);
  //   } catch (e: any) {
  //     setErrorMessage(e.message);
  //   }
  // }

  // return (
  //   props.currentUser ? <Navigate to="/dashboard"/> : 
  //   <>
  //     <h4>Log in to your account</h4>
  //     <div id="body-container">
  //       <input type="text" id="username" placeholder="Enter your username" onChange={updateUsername}/>
  //       <br/><br/>
  //       <input type="password" id="password" placeholder="Enter your password" onChange={updatePassword}/>
  //       <br/><br/>
  //       <button id="login-button" onClick={login}>Login</button>
  //       <br/><br/>
  //     </div>
  //   </>
  // );
}
