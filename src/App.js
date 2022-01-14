import "./App.scss";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import Loaderboard from "./pages/Loaderboard/Loaderboard"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/Loaderboard"  component={Loaderboard} />
				</Switch>
      </BrowserRouter>
		</div>
	);
}

export default App;
