import React from "react";
import "./GameCard.scss";
import playerIcon from "../../assets/icons/player-icon.svg";
import { Link } from "react-router-dom";

const GameCard = ({ gameData }) => {
	return (
		<section className="games-container">
			{gameData.map((game) => {
				// {
				// 	console.log(game);
				// }
				return (
					<Link to="/lobby">
						<article className="game-card" key={game.id}>
							<img
								src={game.image}
								alt={`${game.title} Logo`}
								className="game-card__image"
							/>
							<div className="game-card__info-container">
								<p className="game-card__genre">{game.genre}</p>
								<h4 className="game-card__title">
									{game.title}
								</h4>
								<div className="game-card__info">
									<p className="game-card__time">
										{game.time} mins
									</p>
									<p className="game-card__players">
										<img
											src={playerIcon}
											alt="human icon"
											className="game-card__player-icon"
										/>{" "}
										{game.players}
									</p>
								</div>
							</div>
						</article>
					</Link>
				);
			})}
		</section>
	);
};

export default GameCard;
