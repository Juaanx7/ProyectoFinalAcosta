import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa8aYIwShXIMCCfNAW54HgImy6PCNjBUo",
  authDomain: "istorecba-f4716.firebaseapp.com",
  projectId: "istorecba-f4716",
  storageBucket: "istorecba-f4716.firebasestorage.app",
  messagingSenderId: "115600419941",
  appId: "1:115600419941:web:fbeddac20bb25e6356aa8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };