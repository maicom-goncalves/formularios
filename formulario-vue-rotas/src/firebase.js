import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/firestore';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvjkel6uxADBbuwiHvUbYCv_lDvy1Uj3I",
  authDomain: "formulario-tcc-d2ea3.firebaseapp.com",
  projectId: "formulario-tcc-d2ea3",
  storageBucket: "formulario-tcc-d2ea3.appspot.com",
  messagingSenderId: "937530099359",
  appId: "1:937530099359:web:03f66a9b330a2c7e1bc4aa"
});

//db.settings({ timestampsInSnapshots:true })
export const db = firebaseApp.firestore();