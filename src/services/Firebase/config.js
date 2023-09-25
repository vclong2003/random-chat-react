// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4vpLGlSZxysxgbtmwc3RZpfl9RbhYpvw",
  authDomain: "socialmediaapp-9c3b6.firebaseapp.com",
  projectId: "socialmediaapp-9c3b6",
  storageBucket: "socialmediaapp-9c3b6.appspot.com",
  messagingSenderId: "54383993818",
  appId: "1:54383993818:web:32a565958ba182b7a996e3",
  measurementId: "G-JRLVXHEMXD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
