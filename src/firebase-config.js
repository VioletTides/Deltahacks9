import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3Rqw_-OkzGw6DZXRVtoLn6Fv8eqtkB_M",
  authDomain: "deltahacks9-28454.firebaseapp.com",
  projectId: "deltahacks9-28454",
  storageBucket: "deltahacks9-28454.appspot.com",
  messagingSenderId: "948176226697",
  appId: "1:948176226697:web:225f4732baa8f084afb958",
  measurementId: "G-BJ02STXPML"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);