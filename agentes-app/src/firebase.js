import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvjkel6uxADBbuwiHvUbYCv_lDvy1Uj3I",
  authDomain: "formulario-tcc-d2ea3.firebaseapp.com",
  projectId: "formulario-tcc-d2ea3",
  storageBucket: "formulario-tcc-d2ea3.appspot.com",
  messagingSenderId: "937530099359",
  appId: "1:937530099359:web:03f66a9b330a2c7e1bc4aa"
});
firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
      }, reject);
  })
};

/*
enviar dados offline com cache
Subsequent queries will use persistence, if it was enabled successfully
*/
firebase.firestore().enablePersistence()
        .catch((err) => {
            if (err.code == 'failed-precondition') {
                // Multiple tabs open, persistence can only be enabled
                // in one tab at a a time.
                // ...
            } else if (err.code == 'unimplemented') {
                // The current browser does not support all of the
                // features required to enable persistence
                // ...
            }
        });
      
   
//db.settings({ timestampsInSnapshots:true })
export const db = firebaseApp.firestore();