import React from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory()

  return (
    <div className="banner">
      <div className="banner__info">
        <h2>Get out and stretch your imagination</h2>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near me
        </h5>
        <Button onClick={() => history.push("/Login")} variant="outline">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
