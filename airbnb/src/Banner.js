import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search"
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory()
    const [showSearch, setShowSearch] = useState(false)
  return (
    <div className="banner">
      <div className="banner__search">
          {/* {showSearch && <h1>SHOW DATE PICKER</h1>} */}
          {showSearch && <Search/>}
        <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" varient="outlined">
          {showSearch? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h2>Get out and stretch your imagination</h2>
        {/* <br/> */}
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near me
        </h5>
        <Button onClick={() => history.push("/search")} variant="outline">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
