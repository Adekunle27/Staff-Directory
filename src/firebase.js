import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc, deleteDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBZARHb4fpyvhlYlcidmImMSxzLRTZ6fKc",
    authDomain: "staff-directory-89ac3.firebaseapp.com",
    projectId: "staff-directory-89ac3",
    storageBucket: "staff-directory-89ac3.appspot.com",
    messagingSenderId: "533782039763",
    appId: "1:533782039763:web:254ca4381d8a5bebd4d826"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { auth, db, storage, collection, doc, setDoc, getDoc, updateDoc, deleteDoc, getDocs, ref, uploadBytes, getDownloadURL };


