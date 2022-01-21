import { Routes, Route } from 'react-router-dom';
import Brand from './Brand';
import Home from './Home';
import Game from './game/Game';
import { LoginComponent } from '../components/user/LoginComponent';
import { Dashboard } from './Dashboard';
import { RegisterComponent } from '../components/user/RegisterComponent';
import CollectionContainer from './collection/CollectionContainer';

export default function MainContainer() {
  // let [aUser, setAUser] = useState(undefined as User | undefined);

  return (
    <div id="main-container">
      <Brand />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/" element={<RegisterComponent />}/>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/dashboard" element={<CollectionContainer />} />
        <Route path="/game" element={<Game />}/>
        <Route path="/collection" element={<CollectionContainer />}/>
      </Routes>
    </div>
  );
} 
