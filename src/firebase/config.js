import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAqWD7iQOCuRC6yafVRRWYZgvmr6X_MMwc",
  authDomain: "miniblog-c5f90.firebaseapp.com",
  projectId: "miniblog-c5f90",
  storageBucket: "miniblog-c5f90.appspot.com",
  messagingSenderId: "255082655669",
  appId: "1:255082655669:web:4a22b92b5778949c8e33fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }