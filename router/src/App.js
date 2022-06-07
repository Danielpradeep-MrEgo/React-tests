import React from "react";
import "./App.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>

					<Route path="/shop">
						<Shop />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

const Home = () => (
	<div>
		<h1>Home</h1>
	</div>
);

export default App;
