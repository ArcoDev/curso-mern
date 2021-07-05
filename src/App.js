import './App.scss';
/*Con "as" le agragamos un alias al componte import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'*/
import Admin from './pages/Admin';
import SigIn from './pages/Admin/SignIn';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  return (
      <div>
        <h1>Estamos en App.js</h1>
        <Admin />
        <SigIn />
        <Home />
        <Contact />
      </div>
  );
}

export default App;