import React, { useEffect, useRef, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import {
	AttachFile,
	InsertEmoticon,
	Mic,
	MoreVert,
	SearchOutlined,
} from "@material-ui/icons";
import "./Chat.css";
import { useParams } from "react-router-dom";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";
import { myConnectedRef, lastOnlineRef, connectedRef } from "./firebase";

function Chat() {
	const [seed, setSeed] = useState("");
	const [input, setInput] = useState("");
	const { roomId } = useParams();
	const { userId } = useParams();
	const [roomName, setRoomName] = useState("");
	const [messages, setMessages] = useState([]);
	const [status, setStatus] = useState(true);
	const [{ user }, dispatch] = useStateValue();

	var myConnectedRef = firebase.database().ref(`users/${userId}/connections`);
	var lastOnlineRef = firebase.database().ref(`users/${userId}/lastOnline`);
	var connectedRef = firebase.database().ref(".info/connected");

	// console.log(roomId)

	useEffect(() => {
		if (roomId) {
			db.collection("rooms")
				.doc(roomId)
				.onSnapshot((snapshot) => setRoomName(snapshot.data().name));

			db.collection("rooms")
				.doc(roomId)
				.collection("messages")
				.orderBy("timestamp", "asc")
				.onSnapshot((snapshot) =>
					setMessages(snapshot.docs.map((doc) => doc.data()))
				);
		}
	}, [roomId]);

	connectedRef.on("value", function (snap) {
		if (snap.val() === true) {
			var con = myConnectedRef.push();
			con.onDisconnect().remove();
			con.set(true);
			lastOnlineRef.onDisconnect().set(firebase.database.ServerValue.TIMESTAMP);
		} else {
			if (snap.val() === false) {
				var con = myConnectedRef.push();
				con.onDisconnect().remove();
				con.set(false);
				lastOnlineRef
					.onDisconnect()
					.set(firebase.database.ServerValue.TIMESTAMP);
			}
		}
	});

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, [roomId]);

	const sendMessage = (e) => {
		e.preventDefault();
		console.log("typed message", input);

		db.collection("rooms").doc(roomId).collection("messages").add({
			message: input,
			name: user.displayName,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput("");
	};

	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

				<div className="chat__headerInfo">
					<h3>{roomName}</h3>
					<h3>{userId}</h3>
					<p>
						Last seen {""}
						{new Date(
							messages[messages.length - 1]?.timestamp?.toDate()
						).toUTCString()}
					</p>
					<h5>{status}</h5>
					{/* <h6>{lastOnlineRef}</h6> */}
				</div>

				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className="chat__body">
				{messages.map((message) => (
					<p
						className={`chat__message ${
							message.name === user.displayName && "chat__receive"
						}`}
					>
						<span className="chat__name">{message.name}</span>
						{message.message}
						<span className="chat__timestamp">
							{new Date(message.timestamp?.toDate()).toUTCString()}
						</span>
					</p>
				))}
			</div>

			<div className="chat__footer">
				<InsertEmoticon />
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Type a message"
						type="text"
					/>
					<button onClick={sendMessage} type="submit">
						send
					</button>
				</form>
				<Mic />
			</div>
		</div>
	);
}

export default Chat;
