import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBrL2QIxaNjpsDM9PBjRdMmV5T0q1W77MI",
  authDomain: "chat-a4f1c.firebaseapp.com",
  projectId: "chat-a4f1c",
  storageBucket: "chat-a4f1c.firebasestorage.app",
  messagingSenderId: "356732416872",
  appId: "1:356732416872:web:4d700f57c9e5d64b171cdd"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
