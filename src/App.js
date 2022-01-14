import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Lobby from "./components/Lobby/Lobby";
import LandingPage from "./pages/LandingPage";

function App() {
	return (
		// <BrowserRouter>
		// 	<Switch>
		// 		<Route path="/" component={LandingPage} />
		// 		<Route path="/lobby" component={Lobby} />

		// 	</Switch>
		// </BrowserRouter>

		// <LandingPage />
		<Lobby />
	);
}

export default App;
