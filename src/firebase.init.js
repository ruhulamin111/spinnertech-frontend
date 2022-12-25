import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhkIaqIG3OMfgtpQkUy3AeaVOHCce8kTs",
    authDomain: "spinnertech-6a71d.firebaseapp.com",
    projectId: "spinnertech-6a71d",
    storageBucket: "spinnertech-6a71d.appspot.com",
    messagingSenderId: "690556983698",
    appId: "1:690556983698:web:233215b6877ada3a70094b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth; 
