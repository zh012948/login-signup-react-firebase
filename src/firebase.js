import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6cXRR1lZlSx0TJ07oY7PRaqwkNhBoeW0",
    authDomain: "react-firebase-75d72.firebaseapp.com",
    projectId: "react-firebase-75d72",
    storageBucket: "react-firebase-75d72.firebasestorage.app",
    messagingSenderId: "1037629958883",
    appId: "1:1037629958883:web:e5492de0f2d60e7d7373d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)