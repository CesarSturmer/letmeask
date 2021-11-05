import 'firebase/auth'
import 'firebase/database'

import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyD51KHiDsl8SNVd12NQPmZ2weMNE25UscE",
  authDomain: "letmeask-82e50.firebaseapp.com",
  databaseURL: "https://letmeask-82e50-default-rtdb.firebaseio.com",
  projectId: "letmeask-82e50",
  storageBucket: "letmeask-82e50.appspot.com",
  messagingSenderId: "778342802244",
  appId: "1:778342802244:web:c5d661a94164e7f7eded11"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const database = firebase.database();

export { database, firebase, auth }