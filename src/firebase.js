// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjvoRnBqMQLfWYZkaJOL3yyUfwADbDyio",
  authDomain: "whatsappclone-c14ac.firebaseapp.com",
  databaseURL: "https://whatsappclone-c14ac.firebaseio.com",
  projectId: "whatsappclone-c14ac",
  storageBucket: "whatsappclone-c14ac.appspot.com",
  messagingSenderId: "431919144641",
  appId: "1:431919144641:web:e2ec042e1497c24b837e40",
  measurementId: "G-K5ZMM4YZEN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;