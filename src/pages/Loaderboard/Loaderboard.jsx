import React from 'react';
import {Link} from "react-router-dom"
import userImage from "../../assets/icons/logo.png";
import logo from "../../assets/icons/breaktime.svg";
import Footer from "../../components/Footer/Footer"
import vector from "../../assets/icons/Vector.png"
const Loaderboard = () => {
		return (
			< div className="LandingPage">
				<header className="header">
					<h2 className="header__logo"><img src={logo} alt="logo" /></h2>
					<nav className="header__list">
					<Link to='/'><li className="header__item ">Game Room</li></Link>
						<li className="header__item">Events</li>
						<li className="header__item header__item--active">Loaderboard</li>
						<li className="header__item">Shop</li>
					</nav>
					<article className="user-card">
						<img className="user-card__img" src={userImage} alt="user" />
						<h2 className="user-card__rank">Current Rank #4</h2>
						<h2 className="user-card__point">Points 2630</h2>
					</article>
				</header>
				<div className="Landing__body" >
						<main className="game-room">
							<h1 className="game-room__header">Loaderboard</h1>
							<p className="game-room__banner">
							See the top scoring players of the month.
							</p>
							<div className="table__header">
								 <div className="table__item">Name</div>
								 <div className="table__item">Department</div>
								 <div className="table__item">Location</div>
								 <div className="table__item">Points</div>
								 <div className="table__item table__item--crown"></div>
							</div>
							<div className="table__body">
								 <div className="table__item">1  June M.</div>
								 <div className="table__item"> Marketing</div>
								 <div className="table__item">Vancouver</div>
								 <div className="table__item">3825</div>
								 <div className="table__item table__item--crown"><img src={vector} alt="crown" /></div>
							</div>
							<div className="table__body">
								<div className="table__item">2  Tina F.</div>
								<div className="table__item"> Sales</div>
								<div className="table__item">Toronto</div>
								<div className="table__item">3425</div>
								<div className="table__item table__item--crown"></div>
							</div>
							<div className="table__body">
								<div className="table__item">3 Miguel R.</div>
								<div className="table__item"> Operations</div>
								<div className="table__item">London</div>
								<div className="table__item">2760</div>
								<div className="table__item table__item--crown"></div>
							</div>
							<div className="table__body table__body--you">
								<div className="table__item">4 You</div>
								<div className="table__item"> Engineering</div>
								<div className="table__item">Vancouver</div>
								<div className="table__item">2630</div>
								<div className="table__item table__item--crown"></div>
							</div>
							<div className="table__body">
								<div className="table__item">5  Jasprit S.</div>
								<div className="table__item"> Product</div>
								<div className="table__item">London</div>
								<div className="table__item">2525</div>
								<div className="table__item table__item--crown"></div>
							</div>
							<div className="table__body">
								<div className="table__item">6  Jessica L.</div>
								<div className="table__item"> Marketing</div>
								<div className="table__item">vancouver</div>
								<div className="table__item">2430</div>
								<div className="table__item table__item--crown"></div>
							</div>
							<div className="table__body">
								<div className="table__item">7  Theodore M.</div>
								<div className="table__item"> Finance</div>
								<div className="table__item">Toronto</div>
								<div className="table__item">2330</div>
								<div className="table__item table__item--crown"></div>
							</div>
							<div className="table__body">
								<div className="table__item">8  Sarah K. </div>
								<div className="table__item"> Content</div>
								<div className="table__item">Seattle</div>
								<div className="table__item">2216</div>
								<div className="table__item table__item--crown"></div>
							</div>
							<div className="table__body">
								<div className="table__item">9  Joe R.</div>
								<div className="table__item"> Sales</div>
								<div className="table__item">Toronto</div>
								<div className="table__item">2125</div>
								<div className="table__item table__item--crown"></div>
							</div>
							<div className="table__body">
								<div className="table__item">10  Mark S.</div>
								<div className="table__item"> Product</div>
								<div className="table__item">London</div>
								<div className="table__item">1525</div>
								<div className="table__item table__item--crown"></div>
							</div>
							<div className="table__body">
								<div className="table__item">11  Lina L.</div>
								<div className="table__item"> Marketing</div>
								<div className="table__item">vancouver</div>
								<div className="table__item">1430</div>
								<div className="table__item table__item--crown"></div>
							</div>
							<div className="table__body">
								<div className="table__item">12  Simon M.</div>
								<div className="table__item"> Finance</div>
								<div className="table__item">Toronto</div>
								<div className="table__item">1330</div>
								<div className="table__item table__item--crown"></div>
							</div>
							<div className="table__body">
								<div className="table__item">13  Jhon M. </div>
								<div className="table__item"> Content</div>
								<div className="table__item">Seattle</div>
								<div className="table__item">1216</div>
								<div className="table__item table__item--crown"></div>
							</div>
							<div className="table__body">
								<div className="table__item">14 Joe R.</div>
								<div className="table__item"> Sales</div>
								<div className="table__item">Toronto</div>
								<div className="table__item">1125</div>
								<div className="table__item table__item--crown"></div>
							</div>
							
							
						</main>
						{/* <footer className="game-room__footer">
							<Footer />
						</footer> */}
					</div>
			</div>
		);
	}


export default Loaderboard;