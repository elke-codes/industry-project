// Thanks to PedroTech for guiding me through my first socket.io experience!
// Basic app functionality created by following their tutorial on // https://www.youtube.com/watch?v=NU-HfZY3ATQ

import React, { useEffect, useState } from "react";
//...uses library, can do this myself?
import ScrollToBottom from "react-scroll-to-bottom";
// import sendIcon from "../../../assets/icons/mic.png";
import sendIcon from "./send-icon.svg";
import io from "socket.io-client";
import chatButton from "../../../assets/icons/chat.svg";
import "./App.css";
// import { useState } from "react";

const socket = io.connect("http://localhost:3001");

//...socket needs to be passed down as a prop
const Chat = () => {
	const [userName, setUserName] = useState("");
	const [room, setRoom] = useState(1);
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
	//keep track of message
	const [currentMessage, setCurrentMessage] = useState("");
	const [messageList, setMessageList] = useState([]);

	//allow messages to be sent through socket
	//async because you want to wait for the state to be set
	//...can do with useEffect listening to the currentMessage to change?
	const sendMessage = async () => {
		if (currentMessage !== "") {
			const messageData = {
				room: room,
				author: userName,
				message: currentMessage,
				time:
					new Date(Date.now()).getHours() +
					":" +
					new Date(Date.now()).getMinutes()
			};

			//see index.js for listener listening to "send_message"
			//send the message data to the backend after the current message has been changed

			await socket.emit("send_message", messageData);
			//to send message to both, update both messaglists
			setMessageList((list) => [...list, messageData]);
			//empty the container after sending the message
			setCurrentMessage("");
		}
	};

	// listen to whenever there s changes to our socket server
	useEffect(() => {
		//listen for event emitted from server "receive_message", receive data sent from backend
		socket.on("receive_message", (data) => {
			console.log(data);
			//grab current/previous messagelist, return that with the message added
			setMessageList((list) => [...list, data]);
		});
	}, [socket]);

	return (
		<>
			<div className="Chat">
				{!showChat ? (
					<>
						<img
							className="chat-button"
							src={chatButton}
							alt=""
							name="userName"
							onChange={(e) => {
								setUserName("Tim");
								setRoom(1);
							}}
							onClick={() => {
								console.log("clicked");
								joinRoom();
								setShowChat(true);
							}}
						/>
						{/* <div className="joinChatContainer">
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
						</div> */}
					</>
				) : (
					<Chat socket={socket} userName={userName} room={room} />
				)}
			</div>
			{showChat ? (
				<div className="chat-window">
					<div className="chat-header">
						<p>Live Chat</p>
					</div>
					{/* where messagecontent is the data received back from the server  */}
					<div className="chat-body">
						{/* wrap whatever you r mapping in the scrolltobottom and set a height on it, in this case the height will be the same as the message-container */}
						<ScrollToBottom className="message-container">
							{messageList.map((messageContent) => {
								{
									/* where messagecontent is the data received back from the server  */
								}
								return (
									<div
										className="message"
										// check who is the autor of the message, it it s the one sending it , it s you lol, otherwise it s the other
										id={
											userName === messageContent.author
												? "you"
												: "other"
										}>
										<div>
											<div className="message-content">
												{" "}
												<p>{messageContent.message}</p>
											</div>
											<div className="message-meta">
												<p>
													{" "}
													<p className="time">
														{messageContent.time}
													</p>
													<p className="author">
														{messageContent.author}
													</p>
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</ScrollToBottom>
					</div>
					<div className="chat-footer">
						<input
							type="text"
							value={currentMessage}
							placeholder="Write a message..."
							onChange={(e) => {
								setCurrentMessage(e.target.value);
							}}
							//if the key pressed is enter send the message
							onKeyPress={(e) => {
								e.key === "Enter" && sendMessage();
							}}
						/>
						<button onClick={sendMessage}>send</button>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Chat;
