import React from "react";
import "./LandingPage.scss";

class LandingPage extends Component {

	
	render() {
		return (
			< div className="LandingPage">
				<header className="header">
					<h2 className="header__logo"><img src={logo} alt="logo" /></h2>
					<nav className="header__list">
						<li className="header__item ">Game Room</li>
						<li className="header__item">Evenets</li>
						<li className="header__item header__item--active">Loaderboard</li>
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
					<p>description Lorem ipsum dolor, sit amet consectetur </p>
					<SearchBar />
					{/* games.map---> */}
					<GameCard />
				</main>
				<footer>
					<img src="" alt="" />
					<h2>1</h2>
					<img src="" alt="" />
				</footer>
			</div>
		);
	}
}

export default LandingPage;
