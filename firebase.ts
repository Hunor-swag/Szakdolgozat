// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuVlWWAdbvzzan769qeTVYaA-U1bUAOvY",
  authDomain: "szakdolgozat-b7f30.firebaseapp.com",
  projectId: "szakdolgozat-b7f30",
  storageBucket: "szakdolgozat-b7f30.appspot.com",
  messagingSenderId: "118097496090",
  appId: "1:118097496090:web:f1950161effcf911d169a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export default auth;
