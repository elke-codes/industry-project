import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GameScreen from "./components/GameScreen/GameScreen";
import Loaderboard from "./pages/Loaderboard/Loaderboard";
import Lobby from "./components/Lobby/Lobby";

function App() {
	return (
		<div className="App">
			{/* <GameScreen /> */}
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/Loaderboard" component={Loaderboard} />
					<Route path="/gamescreen" component={GameScreen} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
