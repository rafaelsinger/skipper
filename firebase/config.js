import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb7u0rAcJ-gryyZRpQydLjB3Cg5Rbr2NA",
  authDomain: "skipper-9e398.firebaseapp.com",
  projectId: "skipper-9e398",
  storageBucket: "skipper-9e398.appspot.com",
  messagingSenderId: "1026181832451",
  appId: "1:1026181832451:web:2356d49abbf3af49719336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);