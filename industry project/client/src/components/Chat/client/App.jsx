import "./App.css";
//import at high level, like here in app
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

//establish connection to backend
//link to where running socket.io server
//SERVER_URL
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
			{!showChat ? (
				<div className="joinChatContainer">
					<h3>Join a chat</h3>
					<input
						type="text"
						placeholder="Name..."
						name="userName"
						onChange={(e) => {
							setUserName(e.target.value);
						}}
					/>
					<input
						type="text"
						placeholder="Room ID ..."
						name="room"
						onChange={(e) => {
							setRoom(e.target.value);
						}}
					/>
					<button onClick={joinRoom}>Join a room</button>
				</div>
			) : (
				<Chat socket={socket} userName={userName} room={room} />
			)}
		</div>
	);
}

export default App;
