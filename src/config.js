// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI-zE6lb4Ilx5Rie6ZnnA2nvZj0lF3IZQ",
  authDomain: "karina-sandbox.firebaseapp.com",
  projectId: "karina-sandbox",
  storageBucket: "karina-sandbox.firebasestorage.app",
  messagingSenderId: "426516732748",
  appId: "1:426516732748:web:bfdbf9643248307f390de9",
  measurementId: "G-Y2C8KFYVVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;