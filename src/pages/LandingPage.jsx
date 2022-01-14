import React from "react";
import "./LandingPage.scss";

class LandingPage extends Component {

	render() {
		return (
			<>
				<header>
					<nav></nav>
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
			</>
		);
	}
}

export default LandingPage;
