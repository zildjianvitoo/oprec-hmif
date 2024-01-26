import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE6ev2Aoel7qLB-kaLN4Rl1TxjBI8-sk4",
  authDomain: "oprec-backup24.firebaseapp.com",
  projectId: "oprec-backup24",
  storageBucket: "oprec-backup24.appspot.com",
  messagingSenderId: "566216641011",
  appId: "1:566216641011:web:d6f1b61459c7736d08aa86"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
