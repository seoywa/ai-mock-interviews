import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDlnf3o8FN-60Hjfdl1kZu7wQsqM7NBFzQ",
  authDomain: "prepwise-7a1f5.firebaseapp.com",
  projectId: "prepwise-7a1f5",
  storageBucket: "prepwise-7a1f5.firebasestorage.app",
  messagingSenderId: "992102758510",
  appId: "1:992102758510:web:517122caf87bc7ce288e7f",
  measurementId: "G-2KT9NT9VMV"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app);
export const db = getFirestore(app);