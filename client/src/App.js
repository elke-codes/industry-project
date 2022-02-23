import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/LandingPage";
import GameScreen from "./components/GameScreen/GameScreen";
import Loaderboard from "./pages/Loaderboard/Loaderboard";
import Lobby from "./components/Lobby/Lobby";
import Chat from "./components/Chat/client/Chat";
import io from "socket.io-client";
import { useState } from "react";
const socket = io.connect("http://localhost:3001");

function App() {
	const [userName, setUserName] = useState("");
	const [room, setRoom] = useState("");
	const [showChat, setShowChat] = useState(false);

	//establish a connection between a user that just entered the page and the room they want to enter
	const joinRoom = () => {
		//set userName and room to be what's typed in the input fields
		//
		//check if fields aren't empty
		if (userName !== "" && room !== "") {
			//emit event from frontend
			//see index.js socket.on("join_room")
			// where room is the data we 're passing back to server
			socket.emit("join_room", room);
			setShowChat(true);
			//https://www.youtube.com/watch?v=NU-HfZY3ATQ
		}
	};
	return (
		<div className="App">
			{/* <GameScreen /> */}
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/Loaderboard" component={Loaderboard} />
					<Route path="/gamescreen" component={GameScreen} />
					<Route path="/lobby" component={Lobby} />
					<Chat />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
