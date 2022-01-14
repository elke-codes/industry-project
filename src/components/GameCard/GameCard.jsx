import React from "react";
import "./GameCard.scss";
import playerIcon from "../../assets/icons/player-icon.svg";
import cardsAgainstHumanity from "../../assets/images/cards-against-humanity.png";

const GameCard = (props) => {
	return (
		<article className="game-card">
			<img
				src={cardsAgainstHumanity}
				alt="Cards Against Humanity Logo"
				className="game-card__image"
			/>
			<div className="game-card__info-container">
				<p className="game-card__genre">icebreaker</p>
				<h4 className="game-card__title">Cards Against Humanity</h4>
				<div className="game-card__info">
					<p className="game-card__time">30 mins</p>
					<p className="game-card__players">
						<img
							src={playerIcon}
							alt="human icon"
							className="game-card__player-icon"
						/>{" "}
						2+
					</p>
				</div>
			</div>
		</article>
	);
};

export default GameCard;
