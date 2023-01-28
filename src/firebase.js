import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeVzAzXo3bN8tSzViZvn5ZK2CZqumZUyE",
  authDomain: "kadek-netflix-project.firebaseapp.com",
  projectId: "kadek-netflix-project",
  storageBucket: "kadek-net",
  messagingSenderId: "567848888589",
  appId: "1:567848888589:web:58d7f6de440279f47be844",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // firestore: the realtime db firebase
const auth = firebase.auth();

export { auth };
export default db;
