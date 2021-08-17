import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyBPTHKZsRQDmoebtPuwlQ0ihKmWxgRi6kw",
    authDomain: "testv2-3cf73.firebaseapp.com",
    projectId: "testv2-3cf73",
    storageBucket: "testv2-3cf73.appspot.com",
    messagingSenderId: "170877658635",
    appId: "1:170877658635:web:c9f25742c4cf173c2a890e",
  };

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
  
}; 
export default firebase;
