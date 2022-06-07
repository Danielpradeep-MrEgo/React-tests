import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function Home() {
  return (
    <div className="home">

      <Router>
        <Switch>
          <Route path="/Home">
            <Home/>
            <Banner/>
          </Route>
        </Switch>
      </Router>
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="confortable private places, with room"
        />
        {/* <Card
          src="https://a0.muscache.com/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        /> */}
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Online Experiences"
          description="Spaces that are more than just a place to sleep"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Online Experiences"
          description="Spaces that are more than just a place to sleep"
        />
        {/* // src="https://a0.muscache.com/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg"/> */}
      </div>

      <div className="home__section">
        <Card src="https://a0.muscache.com/im/pictures/2eab7b5b-02a6-4d51-827b-d833267e4506.jpg?im_w=720" title="Los Angeles" description="100 + stays"/>
        <Card src="https://a0.muscache.com/im/pictures/62598f30-cb03-43ef-b80e-9d0d5b28ac51.jpg?im_w=720" title="Swiss Alps" description="120 + stays"/>
        <Card
          src="https://a0.muscache.com/im/pictures/393a0a05-1b90-4e01-980e-30b7499e85d7.jpg?im_w=720"
          title="Featured Homes"
          description="experience one of our premium houses"
        />
      </div>
    </div>
  );
}

export default Home;
