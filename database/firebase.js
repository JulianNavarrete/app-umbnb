import firebase from 'firebase'

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBNQqX5drBNRRPf3ozAlYR4S7Vqj666MWY",
    authDomain: "app-umbnb.firebaseapp.com",
    projectId: "app-umbnb",
    storageBucket: "app-umbnb.appspot.com",
    messagingSenderId: "484922301662",
    appId: "1:484922301662:web:a8ccef8eaca19d1a88364f"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore()

export default{
    firebase,
    db,
}