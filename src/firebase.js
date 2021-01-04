// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASyo4z94n17gKEAL346CB19eAKrtlU9IA",
  authDomain: "linkedin-clone-874a2.firebaseapp.com",
  projectId: "linkedin-clone-874a2",
  storageBucket: "linkedin-clone-874a2.appspot.com",
  messagingSenderId: "613950669473",
  appId: "1:613950669473:web:aded9904bee0a32ddfe6e0",
  measurementId: "G-31YKMZPEQJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

// const providerGo = new firebase.auth.GoogleAuthProvider();
// const providerFb = new firebase.auth.FacebookAuthProvider();

// export { providerGo, providerFb };

export { db, auth };
