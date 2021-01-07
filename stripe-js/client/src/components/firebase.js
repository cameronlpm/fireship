import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBwrrqhg1twRcXl_x_U8H5sHvkSZFfHAts",
  authDomain: "stripe-js-49b59.firebaseapp.com",
  projectId: "stripe-js-49b59",
  storageBucket: "stripe-js-49b59.appspot.com",
  messagingSenderId: "710997074210",
  appId: "1:710997074210:web:a8f2c9b84667ba8260c57b",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
