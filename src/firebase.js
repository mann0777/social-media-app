// import firebase from "firebase";
import firebase from "firebase/compat";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQhhDUIX0u3JFHLSB0ZQ6SZqPKa26KTD0",
    authDomain: "instagram-clone-7a642.firebaseapp.com",
    databaseURL: "https://instagram-clone-7a642-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-7a642",
    storageBucket: "instagram-clone-7a642.appspot.com",
    messagingSenderId: "540606273114",
    appId: "1:540606273114:web:9a8a0a555d90ab80796a63",
    measurementId: "G-2EJGP11LW5"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };