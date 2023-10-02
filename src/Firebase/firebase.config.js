// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeWrbq5rEycFDQJTkIB1CtAtDOh3KkjnA",
  authDomain: "the-news-dragon-fa428.firebaseapp.com",
  projectId: "the-news-dragon-fa428",
  storageBucket: "the-news-dragon-fa428.appspot.com",
  messagingSenderId: "13941097014",
  appId: "1:13941097014:web:9e5e009ca95141d07f8e97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;