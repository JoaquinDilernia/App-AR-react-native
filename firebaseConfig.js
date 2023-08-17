
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5l7dJofoMnQ2mii6rxDkumumu8ZyrhiA",
  authDomain: "app-ar-1acda.firebaseapp.com",
  projectId: "app-ar-1acda",
  storageBucket: "app-ar-1acda.appspot.com",
  messagingSenderId: "850861522590",
  appId: "1:850861522590:web:7c4b38ef2e83db2d15c58f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// ios 182947276628-c9u5lhj19711l4a20uefhpja762clk29.apps.googleusercontent.com