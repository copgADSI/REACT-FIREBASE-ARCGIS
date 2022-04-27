import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNUnGi-_s9IyE0kapf97yyMJyBQlfEPcM",
  authDomain: "proyecto-simple-b3533.firebaseapp.com",
  projectId: "proyecto-simple-b3533",
  storageBucket: "proyecto-simple-b3533.appspot.com",
  messagingSenderId: "345538267349",
  appId: "1:345538267349:web:68de81cd58857d7a75ba5c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)