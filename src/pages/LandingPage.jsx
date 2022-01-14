import React from "react";
import { Component } from 'react';
import "./LandingPage.scss";
import userImage from "../assets/icons/logo.png"
import logo from "../assets/icons/breaktime.svg"
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
			['Genre', 'Icebreaker',]
		]

		return (
			< div className="LandingPage">
				<header className="header">
					<h2 className="header__logo"><img src={logo} alt="logo" /></h2>
					<nav className="header__list">
						<li className="header__item header__item--active ">Game Room</li>
						<li className="header__item">Evenets</li>
						<li className="header__item">Loaderboard</li>
						<li className="header__item">Shop</li>
					</nav>
					<article className="user-card">
						<img className="user-card__img" src={userImage} alt="user" />
						<h2 className="user-card__rank">Current Rank #4</h2>
						<h2 className="user-card__point">Points 2630</h2>
					</article>
				</header>
				<main>
					<h1>Game Room</h1>
					<p>Browse our collection of social mulltiplayer games for your team to enjoy!</p>
					<SearchBar submitHandler={this.submitHandler} sortDetails={details} />
					{/* games.map---> */}
					{/* <GameCard /> */}
				</main>
			<Footer />
			</div>
		);
	}
}

export default LandingPage;
