// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoOiCc6PGbEwzN1yLcJ7xsqo9lHTJSVhU",
  authDomain: "swiggy-project-71cc5.firebaseapp.com",
  projectId: "swiggy-project-71cc5",
  storageBucket: "swiggy-project-71cc5.appspot.com",
  messagingSenderId: "43377659771",
  appId: "1:43377659771:web:2657cf4a50e3d60eb5b7de",
  measurementId: "G-HLSBHSLK2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
