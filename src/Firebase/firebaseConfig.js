// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB51_btdnqfqOE5oQwWOtnFPcQa-yxXqk8",
  authDomain: "fir-authentication-252b0.firebaseapp.com",
  projectId: "fir-authentication-252b0",
  storageBucket: "fir-authentication-252b0.appspot.com",
  messagingSenderId: "861691475947",
  appId: "1:861691475947:web:d98702ab6e993b00ce4bae",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const logOut = () => signOut(auth);
