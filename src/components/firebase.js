import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; 
import "firebase/compat/auth";
import "firebase/compat/storage";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcm0LE4IHdMiV4pe3pJUE7uUXCQHYxixE",
    authDomain: "disney-plus-clone-e6a9e.firebaseapp.com",
    projectId: "disney-plus-clone-e6a9e",
    storageBucket: "disney-plus-clone-e6a9e",
    messagingSenderId: "1038796360304",
    appId: "1:1038796360304:web:5f8a73294abc5d449302b5",
    measurementId: "G-WVYZY4STXH"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

// Export Auth and DB
export { auth, provider , storage};
export default db;
