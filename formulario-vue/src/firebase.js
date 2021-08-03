import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDClDndxZuBpnXLEfBlzRoXMrfqBfb5QsI",
  authDomain: "formulario-teste-a8c51.firebaseapp.com",
  projectId: "formulario-teste-a8c51",
  storageBucket: "formulario-teste-a8c51.appspot.com",
  messagingSenderId: "603486604686",
  appId: "1:603486604686:web:62eae4e21ef2fe5296a8df",
  measurementId: "G-0Z1RSV6S5R"
});

//db.settings({ timestampsInSnapshots:true })
export const db = firebaseApp.firestore();



