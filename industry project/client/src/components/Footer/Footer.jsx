import "./Footer.scss";
import React from "react";
import arrowRight from "../../assets/icons/arrow-right.png";
import arrowLeft from "../../assets/icons/arrow-left.png";
import Chat from "../Chat/client/Chat";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer__arrow-left">
					<img
						className="footer__arrow-left-icon"
						src={arrowLeft}
						alt="arrow left"
					/>
				</div>
				<p className="footer__text">1</p>
				<div className="footer__arrow-right">
					<img
						src={arrowRight}
						alt="arrow rigth"
						className="footer__arrow-right-icon"></img>
				</div>
			</footer>
			<Chat />
		</>
	);
};

export default Footer;
