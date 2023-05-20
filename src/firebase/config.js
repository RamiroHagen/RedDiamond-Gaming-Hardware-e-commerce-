// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm6MplR-mP57koobOmGpC_HkLE5JZVcmU",
  authDomain: "reddiamond-gaming-hardware1.firebaseapp.com",
  projectId: "reddiamond-gaming-hardware1",
  storageBucket: "reddiamond-gaming-hardware1.appspot.com",
  messagingSenderId: "346243785959",
  appId: "1:346243785959:web:5d03d36aec405c68662e42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app