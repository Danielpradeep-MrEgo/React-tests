import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from "./Login"
import Home from "./Home"
import Tour from "./Tour"
import Banner from "./Banner";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/Login">
            <Login/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>


        </Switch>
      </Router>

      {/* {user ? (
          <Button onClick={() => auth.signOut()}>Logout</Button>
        ) : (
          <div className="app__loginContainer">
            <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
            <Button onClick={() => setOpen(true)}>Sign up</Button>
          </div>
        )} */}
    </div>
  );
}

export default App;
