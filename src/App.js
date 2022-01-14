import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/LandingPage";
import GameScreen from "./components/GameScreen/GameScreen";
import Loaderboard from "./pages/Loaderboard/Loaderboard";
import Lobby from "./components/Lobby/Lobby";
import WinnerScreen from "./components/WinnerSreen/WinnerScreen";

function App() {
	return (
		<div className="App">
			{/* <GameScreen /> */}
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/Loaderboard" component={Loaderboard} />
					<Route path="/lobby" component={Lobby} />
					<Route path="/gamescreen" component={GameScreen} />
					<Route path="/winner" component={WinnerScreen} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
