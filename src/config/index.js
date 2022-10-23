// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh5C7GzBV0szKU7Bw1vjh41ArvNeAE4-0",
  authDomain: "usexify.firebaseapp.com",
  projectId: "usexify",
  storageBucket: "usexify.appspot.com",
  messagingSenderId: "753877066645",
  appId: "1:753877066645:web:35d837891470e25e6a4c9c",
  measurementId: "G-LN4QV0NV7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app