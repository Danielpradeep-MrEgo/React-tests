import React from "react";
import "./Tour.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Tour() {
  const history = useHistory()

  return (
    <div className="tour">
        {/* <Link to="/Banner"> */}
            {/* <button>Take a tour</button> */}
            <Button onClick={() => history.push("/")} variant="outline">Take</Button>
         {/* </Link> */}
            
    </div>
  );
}

export default Tour;
