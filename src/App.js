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
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  
  return (
    <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <PrivateRoute path="/order">
        <Order />
      </PrivateRoute>
      <PrivateRoute path="/admin">
        <Admin />
      </PrivateRoute>
      <PrivateRoute path="/checkout/:id">
        <CheckOut />
      </PrivateRoute>
      <Route path="/login">
        <LogIn />
      </Route>
      <Route exact path="*">
        <NotFound />
      </Route>
    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;