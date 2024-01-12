import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_jGLLcw6TL2T8ughsDsLdn28g3Q6C4SE",
  authDomain: "oprec-hmif24.firebaseapp.com",
  projectId: "oprec-hmif24",
  storageBucket: "oprec-hmif24.appspot.com",
  messagingSenderId: "644163844787",
  appId: "1:644163844787:web:6ead277e08bce818804ec6",
  measurementId: "G-3JTW9B4N80",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
