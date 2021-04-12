import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Admin from './components/Admin/Admin';
import Footer from './components/Footer/Footer';
import CheckOut from './components/CheckOut/CheckOut';
import Order from './components/Order/Order';

function App() {
  return (
    <Router>
    <Header />
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/order">
        <Order />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/checkout">
        <CheckOut />
      </Route>
      <Route path="/login">
        <LogIn />
      </Route>
    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;