// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbOAtHFbvypiwidBHrfkxJ-UYNM36e4uA",
  authDomain: "fir-project-bf622.firebaseapp.com",
  projectId: "fir-project-bf622",
  storageBucket: "fir-project-bf622.appspot.com",
  messagingSenderId: "589295360869",
  appId: "1:589295360869:web:fe1a673229879b23cd9f8c",
  measurementId: "G-ZVLNZ1DCQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
