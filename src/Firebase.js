// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}  from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJMw8l0o_24CyWohxikxAn_rnI3M3q114",
  authDomain: "neat-direction-346303.firebaseapp.com",
  projectId: "neat-direction-346303",
  storageBucket: "neat-direction-346303.appspot.com",
  messagingSenderId: "1035790105407",
  appId: "1:1035790105407:web:9dbb1700aec59b5f43318a",
  measurementId: "G-K078274BD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// export default app;
export {auth,app}
