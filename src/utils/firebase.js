// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkiRZdoS7UAAxjX_0q2IbCvHol8F0saak",
  authDomain: "e-comerse-2.firebaseapp.com",
  projectId: "e-comerse-2",
  storageBucket: "e-comerse-2.appspot.com",
  messagingSenderId: "614454448613",
  appId: "1:614454448613:web:d3bd9341b913a81603df0c",
  measurementId: "G-CFEM427WGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);