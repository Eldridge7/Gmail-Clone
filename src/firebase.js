import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCVCSCNSSP2fVgS6Vl8dXjiflBRu2Pxohg",
    authDomain: "clone-yt-1826f.firebaseapp.com",
    projectId: "clone-yt-1826f",
    storageBucket: "clone-yt-1826f.appspot.com",
    messagingSenderId: "66744474142",
    appId: "1:66744474142:web:27ecf55e9e8e2df448ec0f"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider};