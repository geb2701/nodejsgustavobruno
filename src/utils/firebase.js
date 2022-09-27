// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj-63Z57ggCBDi-IeNMumODu5cghzrrvc",
  authDomain: "e-commerce-7b8c2.firebaseapp.com",
  projectId: "e-commerce-7b8c2",
  storageBucket: "e-commerce-7b8c2.appspot.com",
  messagingSenderId: "868301340971",
  appId: "1:868301340971:web:c7e7dbf60180a8e0c3856e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);