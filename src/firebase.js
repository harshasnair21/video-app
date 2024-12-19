import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjxAVVT73UzHrP3uzBQq9Q6JDbd7vhS1Q",
  authDomain: "video-app-91ee6.firebaseapp.com",
  projectId: "video-app-91ee6",
  storageBucket: "video-app-91ee6.firebasestorage.app",
  messagingSenderId: "462798202644",
  appId: "1:462798202644:web:c99989aa81350f7cb98401",
  measurementId: "G-41MDHB903V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
