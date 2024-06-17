// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY6OccOV_66c5KjIgFzSpfez0mp_x9uYc",
  authDomain: "e-commerce-web-app-94afe.firebaseapp.com",
  projectId: "e-commerce-web-app-94afe",
  storageBucket: "e-commerce-web-app-94afe.appspot.com",
  messagingSenderId: "699377241690",
  appId: "1:699377241690:web:6643236a88a241ea28d263",
  measurementId: "G-5X21ERC8VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);