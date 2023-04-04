import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNfjKl-RYdrZ59YEYzzN4ls1Nfr8W7sgs",
  authDomain: "chat-28ef8.firebaseapp.com",
  projectId: "chat-28ef8",
  storageBucket: "chat-28ef8.appspot.com",
  messagingSenderId: "564013569317",
  appId: "1:564013569317:web:2eb2acae61b6be8b98b6cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
