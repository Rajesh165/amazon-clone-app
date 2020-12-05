import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAApPzGMuwsAU0zBB0i6u3ORehk7iyOMe4",
    authDomain: "clone-app-20106.firebaseapp.com",
    projectId: "clone-app-20106",
    storageBucket: "clone-app-20106.appspot.com",
    messagingSenderId: "649778948150",
    appId: "1:649778948150:web:a79bffb6c72cff2bcc1097",
    measurementId: "G-8R3TMRBK24"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
export {db,auth};