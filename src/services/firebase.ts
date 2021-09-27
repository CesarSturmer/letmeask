import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDE-npB2NewsumAMXgdJFlAwDZkuLi_7_w",
  authDomain: "page-7f29d.firebaseapp.com",
  projectId: "page-7f29d",
  storageBucket: "page-7f29d.appspot.com",
  messagingSenderId: "109448461231",
  appId: "1:109448461231:web:bf6be8d62f01f094670d5a",
  databaseURL: "https://page-7f29d-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database, firebase }