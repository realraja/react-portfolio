// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrhpvNKMJ2zgb6G5a1D82ZYkOH7r-g6eQ",
  authDomain: "myportfolio-raja.firebaseapp.com",
  projectId: "myportfolio-raja",
  storageBucket: "myportfolio-raja.appspot.com",
  messagingSenderId: "704908134783",
  appId: "1:704908134783:web:a27daa5792618f5b0bb24a",
  measurementId: "G-4T9P6VJPKB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore()