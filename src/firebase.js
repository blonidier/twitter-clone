import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyCvFE2CEX93u6HXgV1J1azaGUEHNJ7PK7c",
  
    authDomain: "twitter-clone-d4e8a.firebaseapp.com",

    databaseURL: "https://console.firebase.google.com/u/0/project/twitter-clone-d4e8a/firestore/data/~2Fposts~2Fzh7VbLUxuAGJSADDankT",
  
    projectId: "twitter-clone-d4e8a",
  
    storageBucket: "twitter-clone-d4e8a.appspot.com",
  
    messagingSenderId: "213897923",
  
    appId: "1:213897923:web:e14565aceab22c5eefc876",
  
    measurementId: "G-1LHKGCDC5L"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
  