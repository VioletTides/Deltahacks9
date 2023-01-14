// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Rqw_-OkzGw6DZXRVtoLn6Fv8eqtkB_M",
  authDomain: "deltahacks9-28454.firebaseapp.com",
  projectId: "deltahacks9-28454",
  storageBucket: "deltahacks9-28454.appspot.com",
  messagingSenderId: "948176226697",
  appId: "1:948176226697:web:225f4732baa8f084afb958",
  measurementId: "G-BJ02STXPML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = auth(app);