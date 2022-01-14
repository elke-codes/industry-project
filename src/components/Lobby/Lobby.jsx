import React from "react";
import "./Lobby.scss";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import microphone from "../../assets/icons/microphone.svg";
import camera from "../../assets/icons/camera.svg";
import profile1 from "../../assets/images/profile1.png";
const Lobby = () => {
	return (
		<section className="lobby">
			<article className="lobby-left">
				<button className="lobby-left__back-button">
					<img src={arrowLeft} alt="" className="lobby-left__arrow" />
					Back
				</button>
				<div className="lobby-left__player">
					<img
						src={profile1}
						alt=""
						className="lobby-left__player-avatar"
					/>
					<div className="lobby-left__player-info">
						<div className="lobby-left__player-info-rank">
							Current Rank #4
						</div>
						<div className="lobby-left__player-info-points">
							<p className="lobby-left__player-info-points--left">
								Points
							</p>
							<p className="lobby-left__player-info--points-right">
								2630
							</p>
						</div>
					</div>
				</div>
				<div className="lobby-left__player-container">
					<h4 className="lobby-left__players-header">PLAYERS 4/6</h4>
					<ul className="lobby-left__player-list">
						<li className="lobby-left__player-name">
							<span className="lobby-left__player-number">1</span>
							You
						</li>
						<li className="lobby-left__player-name">
							<span className="lobby-left__player-number">2</span>
							Tina F.
						</li>
						<li className="lobby-left__player-name">
							<span className="lobby-left__player-number">3</span>
							Miguel R.
						</li>
						<li className="lobby-left__player-name">
							<span className="lobby-left__player-number">4</span>
							June M.
						</li>
						<li className="lobby-left__player-name lobby-left__player-name--empty">
							<span className="lobby-left__player-number">5</span>
							Empty
						</li>
						<li className="lobby-left__player-name lobby-left__player-name--empty">
							<span className="lobby-left__player-number">6</span>
							Empty
						</li>
					</ul>
				</div>
			</article>
			<article className="lobby-right">
				<div className="lobby-right__header">
					<div className="lobby-right__header-container">
						<h1 className="lobby-right__title">
							Cards Against Humanity
						</h1>
						<p className="lobby-right__copy">
							A fill-in-the-blank party game that turns your
							awkward personality and lackluster social skills
							into hours of fun! Wow.
						</p>
					</div>
					<div className="lobby-right__buttons-info">
						<button className="lobby-right__button-info">
							How to Play
						</button>
						<button className="lobby-right__button-info">
							Settings
						</button>
					</div>
				</div>
				<div className="lobby-right__main">
					<div className="lobby-right__interaction">
						<div className="lobby-right__interaction-top">
							<button className="lobby-right__interaction-button">
								<img
									src={microphone}
									alt=""
									className="lobby-right__interaction-icon"
								/>
							</button>
							<button className="lobby-right__interaction-button">
								{" "}
								<img
									src={camera}
									alt=""
									className="lobby-right__interaction-icon"
								/>
							</button>
						</div>
						<button className="lobby-right__interaction-bottom lobby-right__interaction-button--start">
							Start Game
						</button>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Lobby;
