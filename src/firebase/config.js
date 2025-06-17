// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQyaxsH5cyuvGhd6uXysUielwJNQerP_8",
  authDomain: "hubsrinishtha.firebaseapp.com",
  projectId: "hubsrinishtha",
  storageBucket: "hubsrinishtha.firebasestorage.app",
  messagingSenderId: "460582823046",
  appId: "1:460582823046:web:bc7dce4a11f4c74ac29d07",
  measurementId: "G-L1DE5ZM4EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };