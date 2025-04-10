// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey:"AIzaSyADuU31xcFLzmF0hZCU6zwYlXKRVBTBEEA",
  authDomain: "estate-80bd6.firebaseapp.com",
  projectId: "estate-80bd6",
  storageBucket: "estate-80bd6.firebasestorage.app",
  messagingSenderId: "412635139831",
  appId: "1:412635139831:web:6dfa1919445bb640618df2",
  measurementId: "G-R19DY8ZDN0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);