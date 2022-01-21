import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <span id="navbar">
        <NavLink className="navlink" to="/">Home</NavLink>
        <NavLink className="navlink" to="/login">Login</NavLink>
        <NavLink className="navlink" to="/login" onClick={() => sessionStorage.removeItem("user_cached")}>Logout</NavLink>
        <NavLink className="navlink" to="/register">Register</NavLink>
        <NavLink className="navlink" to="/game">Game</NavLink>
        <NavLink className="navlink" to="/multiplayer">Multiplayer</NavLink>
        <NavLink className="navlink" to="/collection">Collection</NavLink>
      </span>
    </nav>
  );
}

/* 
home
login/register
multiplayer - launch game
collection
  build deck
  buy pack
*/
