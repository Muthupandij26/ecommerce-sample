import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path = "/checkout">
          <h1> Checkout </h1>
        </Route>
        <Route path = "/login" >
          <Login />
        </Route>
        <Route path = "/reg">
          <Register />
        </Route>
        {/* {This is a default page} */}
        <Route path = "/" >
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}
// { we need React-Router }
// { localhost.com }
// {localhost.com/checkout}
// { localhost.com/login }
export default App;
