import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCWQ4eafn2S_VembpUcPJgVTmEPWj24j2s",
	authDomain: "whatsapp-64ac3.firebaseapp.com",
	databaseURL: "https://whatsapp-64ac3.firebaseio.com",
	projectId: "whatsapp-64ac3",
	storageBucket: "whatsapp-64ac3.appspot.com",
	messagingSenderId: "824355096649",
	appId: "1:824355096649:web:f74872ac824de7b7615798",
	measurementId: "G-RDK55FGL5T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// var myConnectedRef = firebase.database().ref("rooms/`${userId}`/connections");
// var myConnectedRef = firebase.database().ref(`rooms/${userId}/connections`);
// var lastOnlineRef = firebase.database().ref("rooms/user/lastOnline");
// var connectedRef = firebase.database().ref(".info/connected");

export { auth, provider };
// export { myConnectedRef, lastOnlineRef, connectedRef };
export default db;
