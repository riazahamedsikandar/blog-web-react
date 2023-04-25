import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCwldBRkq-Y4CCD6yEcfGB7zFvmrj5YNk8",
  authDomain: "blog-website-using-react.firebaseapp.com",
  projectId: "blog-website-using-react",
  storageBucket: "blog-website-using-react.appspot.com",
  messagingSenderId: "305690863387",
  appId: "1:305690863387:web:eba32b4fa7464d662cd5be",
  measurementId: "G-PGNCF46V6Y",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);