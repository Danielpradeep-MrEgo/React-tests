import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";

function App() {
	// const [user, setUser] = useState(null);
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className="app">
			{user ? (
				<Login />
			) : (
				<Router>
					<h1>Hello Dan</h1>
					<div className="app__body">
						<Switch>
							<Route path="/" exact>
								<Sidebar />
								<Chat />
							</Route>

							<Route path="/rooms/:roomId">
								<Sidebar />
								<Chat />
							</Route>

							{/* <Route path="/" exact>
							<Chat />
						</Route> */}
						</Switch>
					</div>
				</Router>
			)}
		</div>
	);
}

export default App;
