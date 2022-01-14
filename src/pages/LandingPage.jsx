import React, { Component } from "react";

import "./LandingPage.scss";
import GameCard from "../components/GameCard/GameCard";
import gameData from "../data/games.json";

class LandingPage extends Component {
	// state = {
	// 	gameData: []
	// };

	// componentDidMount() {
	// 	this.setState = { gameData };
	// }
	render() {
		// if ((this.state.gameData.length = 0)) return <h1>Loading...</h1>;
		return (
			<>
				<GameCard gameData={gameData} />
			</>
		);
	}
}

export default LandingPage;
