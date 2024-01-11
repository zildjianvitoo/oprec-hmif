import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_jGLLcw6TL2T8ughsDsLdn28g3Q6C4SE",
  authDomain: "oprec-hmif24.firebaseapp.com",
  projectId: "oprec-hmif24",
  storageBucket: "oprec-hmif24.appspot.com",
  messagingSenderId: "644163844787",
  appId: "1:644163844787:web:6ead277e08bce818804ec6",
  measurementId: "G-3JTW9B4N80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);