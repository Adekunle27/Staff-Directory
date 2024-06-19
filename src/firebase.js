import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZARHb4fpyvhlYlcidmImMSxzLRTZ6fKc",
    authDomain: "staff-directory-89ac3.firebaseapp.com",
    projectId: "staff-directory-89ac3",
    storageBucket: "staff-directory-89ac3.appspot.com",
    messagingSenderId: "533782039763",
    appId: "1:533782039763:web:254ca4381d8a5bebd4d826"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };