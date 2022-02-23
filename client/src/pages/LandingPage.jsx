import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";
import userImage from "../assets/icons/logo.png";
import logo from "../assets/icons/breaktime.svg";
import SearchBar from "../components/SearchBar/SearchBar";
import GameCard from "../components/GameCard/GameCard";
import Footer from "../components/Footer/Footer";

import gameData from "../data/games.json";

class LandingPage extends Component {
	submitHandler = (e) => {
		e.preventDefault();
		e.target.reset();
	};

	render() {
		const details = [
			["Time", "5mins", "15mins", "30mins"],
			["People", "2+", "4+", "6+"],
			["Genre", "Words", "Drawing", "Acting", "Trivia"]
		];

		return (
			<div className="LandingPage">
				<header className="header">
					<h2 className="header__logo">
						<img src={logo} alt="logo" />
					</h2>
					<nav className="header__list">
						<li className="header__item header__item--active ">
							Game Room
						</li>
						<li className="header__item">Events</li>
						<Link to="/Loaderboard">
							<li className="header__item">Loaderboard</li>
						</Link>
						<li className="header__item">Shop</li>
					</nav>
					<article className="user-card">
						<img
							className="user-card__img"
							src={userImage}
							alt="user"
						/>
						<h2 className="user-card__rank">Current Rank #4</h2>
						<h2 className="user-card__point">Points 2630</h2>
					</article>
				</header>
				<div className="Landing__body">
					<main className="game-room">
						<h1 className="game-room__header">Game Room</h1>
						<p className="game-room__banner">
							Browse our collection of social mulltiplayer games
							for your team to enjoy!
						</p>
						<SearchBar
							className="game-room__search"
							submitHandler={this.submitHandler}
							sortDetails={details}
						/>
						{/* games.map---> */}
						{/* <GameCard /> */}
						<GameCard
							className="game-room__cards"
							gameData={gameData}
						/>
					</main>
					<footer className="game-room__footer">
						<Footer />
					</footer>
				</div>
			</div>
		);
	}
}

export default LandingPage;
