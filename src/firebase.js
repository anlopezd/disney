// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvTWTG-ou2A04MBEwzeqQrizVWrGZjgwE",
  authDomain: "disney-plus-508b3.firebaseapp.com",
  projectId: "disney-plus-508b3",
  storageBucket: "disney-plus-508b3.appspot.com",
  messagingSenderId: "924575734250",
  appId: "1:924575734250:web:18b17c1fc099c6aadbba93"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;