import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCbAYZ1aTsqEvRfImO2YbKLtUvc2DdWdEY",
  authDomain: "miniblog-511f9.firebaseapp.com",
  projectId: "miniblog-511f9",
  storageBucket: "miniblog-511f9.firebasestorage.app",
  messagingSenderId: "969789653188",
  appId: "1:969789653188:web:9e8412c6d98ddde9748991"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };