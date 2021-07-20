import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLVtq2sOSkZNNrXGzluMkCDJCUvpJS2b8",
   authDomain: "delivery-muito.firebaseapp.com",
   projectId: "delivery-muito",
   storageBucket: "delivery-muito.appspot.com",
   messagingSenderId: "745164617711",
   appId: "1:745164617711:web:f67b5c512f482982dea81a",
   measurementId: "G-TKR1RPT8Q7"
});

export const db = firebaseApp.firestore();
