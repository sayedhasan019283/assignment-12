// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdn8UcMAa19XrFnS-DTrQAulZPC6rKcaU",
    authDomain: "assignment-12-86f99.firebaseapp.com",
    projectId: "assignment-12-86f99",
    storageBucket: "assignment-12-86f99.appspot.com",
    messagingSenderId: "501506981621",
    appId: "1:501506981621:web:01424ce161cb1f3aaecfbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;