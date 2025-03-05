// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsB5J08V6IRC97xTO5pxXu2AkBTzipulA",
  authDomain: "rivera-sandbox.firebaseapp.com",
  projectId: "rivera-sandbox",
  storageBucket: "rivera-sandbox.firebasestorage.app",
  messagingSenderId: "383237436085",
  appId: "1:383237436085:web:8c99fee631ffcd9101c4fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;