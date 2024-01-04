import { initializeApp } from "firebase/app";
import {getfirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVpsH8w87qqg52gqQeumpZc9SC7hI5cTE",
  authDomain: "imageprocess-e9c5f.firebaseapp.com",
  projectId: "imageprocess-e9c5f",
  storageBucket: "imageprocess-e9c5f.appspot.com",
  messagingSenderId: "255231695438",
  appId: "1:255231695438:web:f321eb9133473251ae811f"
};

const app = initializeApp(firebaseConfig);
export const firestore = getfirestore(app);
