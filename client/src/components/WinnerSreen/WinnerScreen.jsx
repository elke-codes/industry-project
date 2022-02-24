import "./WinnerScreen.scss";
import React from "react";
import { Link } from "react-router-dom";
import chatButton from "../../assets/icons/chat.svg";

const WinnerScreen = () => {
	return (
		<>
			<div className="winner-screen">
				<div className="winner-screen__buttons-container">
					<Link to="/gamescreen">
						<button className="winner-screen__button">
							Play Again
						</button>
					</Link>
					<Link to="/">
						<button className="winner-screen__button">Home</button>
					</Link>
				</div>
				<div className="winner-screen__chat-button-container">
					<img
						src={chatButton}
						className="winner-screen__chat-button"
						alt="chat-button"
					/>
				</div>
			</div>
		</>
	);
};

export default WinnerScreen;
