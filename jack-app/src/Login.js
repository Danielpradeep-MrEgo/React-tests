import React from "react"
import './Login.css';
import bub from "./bub.svg"
import Home from "./Home.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useHistory} from "react-router-dom"
import Tour from "./Tour";
import { Button } from "@material-ui/core";

function Login() {
  const history = useHistory()


  return (
    <div className="login">

    <div className="login__background">
      <div className="login__body">

      <h3>Hello Jack Dave here!!</h3>
      <button>sign up</button>
      </div>

      <div className="login__content">

        <small>Welcome to</small>
        <h1>Jack's<h1></h1>Creative Studio</h1>
        

        {/* <Button onClick={() => history.push("/")} variant="outline">Explore Nearby</Button> */}
        <button onClick={() => history.push("/")} variant="outline">Take a tour</button>
      </div>

          

      <div className="bubbles">
        <img src={bub}/>
        <img src={bub}/>
        <img src={bub}/>
        <img src={bub}/>
        <img src={bub}/>
        <img src={bub}/>
        <img src={bub}/>
      </div>
    </div>
    </div>
  );
}

export default Login;