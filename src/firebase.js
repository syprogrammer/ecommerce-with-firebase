// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import {doc,getFirestore,setDoc} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCF8nYm159F3LyhbnLDHR7LKPSCPdtnrfk",
    authDomain: "productlisting-135de.firebaseapp.com",
    projectId: "productlisting-135de",
    storageBucket: "productlisting-135de.appspot.com",
    messagingSenderId: "341765218029",
    appId: "1:341765218029:web:bd2d662e63818c96aef6e4",
    measurementId: "G-PJHM7Z97JZ"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()