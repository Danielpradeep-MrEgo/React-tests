import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
	const navStyle = {
		color: "white",
	};
	return (
		<div className="nav">
			<h1>Nav Logo</h1>
			<ul>
				<Link to="/about" style={navStyle}>
					<li>About</li>
				</Link>
				<Link to="/shop" style={navStyle}>
					<li>Shop</li>
				</Link>
			</ul>
		</div>
	);
}

export default Nav;
