
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBMC2orNdG4v7e0-oZ49Rj3heBFJ-m-fgE",
  authDomain: "chat-830ab.firebaseapp.com",
  projectId: "chat-830ab",
  storageBucket: "chat-830ab.appspot.com",
  messagingSenderId: "164456301049",
  appId: "1:164456301049:web:696af6d574e66e571cfd28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()