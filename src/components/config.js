import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeXIqQ2RidxWjO3vOG3Cbo9TwNtde9W00",
  authDomain: "social-influencer-d2587.firebaseapp.com",
  projectId: "social-influencer-d2587",
  storageBucket: "social-influencer-d2587.appspot.com",
  messagingSenderId: "695107456354",
  appId: "1:695107456354:web:08fab59c7f51cb332db03b",
  measurementId: "G-1ZZT5JMXSS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };