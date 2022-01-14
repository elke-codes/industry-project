import React from "react";

const Lobby = () => {
	return (
		<section className="lobby">
			<article className="lobby-left">
				<button className="lobby-left__back-button">Back</button>
				<div className="lobby-left__player"></div>
				<div className="lobby-left__player-list">
					<h4 className="lobby-left__players">PLAYERS 4/6</h4>
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
          <h1 className="lobby-right__title">Cards Against Humanity</h1>
          <p className="lobby-right__copy">
            A fill-in-the-blank party game that turns your awkward
            personality and lackluster social skills into hours of fun!
            Wow.
          </p>
          <div className="lobby-right__buttons-info">
            <button className="lobby-right__button-info">How to Play</button>
            <button className="lobby-right__button-info">Settings</button>
          </div>
        </div>ton>
					<button className="lobby-right__button-info">
						Settings
					</button>
				</div>
			</article>
		</section>
	);
};

export default Lobby;
