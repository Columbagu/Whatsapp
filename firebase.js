import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6zufqhb2lw-6Z_q1Dzz2zYOtSfPTb8MI",
    authDomain: "whatsapp-2932e.firebaseapp.com",
    projectId: "whatsapp-2932e",
    storageBucket: "whatsapp-2932e.appspot.com",
    messagingSenderId: "493698558784",
    appId: "1:493698558784:web:5a7269fb7c0cc06cfca8a5"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };