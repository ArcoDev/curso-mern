import './App.scss';
/*Con "as" le agragamos un alias al componte */
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="app">
        <h1>Sistema de rutas basico</h1>
        <Link to="/">Home</Link> <br />
        <Link to="/contact">Contact</Link><br /> 
        <Link to="/users">Users</Link><br />
        <br /><br /><br />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users" component={User} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Estamos en el comoponente home</h2>;
}
function Contact() {
  return <h3>Estamos en el comoponente contact</h3>;
}
function User() {
  return <h4>Estamos en el comoponente users</h4>;
}

function Error404() {
  return <h3>Error404...</h3>;
}
export default App;