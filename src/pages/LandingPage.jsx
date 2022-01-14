import React, { Component } from "react";

import "./LandingPage.scss";
import GameCard from "../components/GameCard/GameCard";
import gameData from "../data/games.json";

class LandingPage extends Component {
	render() {
		return (
			<>
				<GameCard gameData={gameData} />
			</>
		);
	}
}

export default LandingPage;
