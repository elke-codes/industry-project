import React from "react";
import { Component } from 'react';
import "./LandingPage.scss";
import SearchBar from "../components/SearchBar/SearchBar";
import GameCard from "../components/GameCard/GameCard";
import Footer from "../components/Footer/Footer";


class LandingPage extends Component {


	submitHandler = (e) => {
		e.preventDefault()
		e.target.reset()
	};


	render() {

		const details = [
			['Time', '5mins', '15mins', '30mins'],
			['People', '2+', '4+', '6+'],
			['Genre', 'Icebreaker']
		]

		return (
			<>
				<header>
					<nav></nav>
				</header>
				<main>
					<h1>Game Room</h1>
					<p>Browse our collection of social mulltiplayer games for your team to enjoy!</p>
					<SearchBar submitHandler={this.submitHandler} sortDetails={details} />
					{/* games.map---> */}
					{/* <GameCard /> */}
				</main>
				<Footer />
			</>
		);
	}
}

export default LandingPage;
