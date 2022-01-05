import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAzdE-wG7nZxMRjTNPkibULRqu3OYBQ-44",
    authDomain: "portfolio-website-a12a1.firebaseapp.com",
    projectId: "portfolio-website-a12a1",
    storageBucket: "portfolio-website-a12a1.appspot.com",
    messagingSenderId: "934932761954",
    appId: "1:934932761954:web:521eab20af95f4f8e2f03b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider
  export {db,auth,provider};