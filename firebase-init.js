/* ==========================================================================
   Firebase initialization — shared by the public site (content-loader.js)
   and the admin panel (admin.js).

   The public site only needs Firestore reads, so its pages load just the
   app + firestore SDK scripts. The admin panel also needs auth + storage.
   This file only touches the Firebase products whose SDK script is actually
   present, so it works on both without erroring.
   ========================================================================== */

const firebaseConfig = {
  apiKey: "AIzaSyCd7uUfMyMFnzqn5iuTrfVk2mXbL4oEC5o",
  authDomain: "mundus-it.firebaseapp.com",
  databaseURL: "https://mundus-it-default-rtdb.firebaseio.com",
  projectId: "mundus-it",
  storageBucket: "mundus-it.firebasestorage.app",
  messagingSenderId: "479342057804",
  appId: "1:479342057804:web:5e87f63c83b284b78e57e9",
  measurementId: "G-S20W78V4B7"
};

firebase.initializeApp(firebaseConfig);

const fbDb = firebase.firestore();
const fbAuth = typeof firebase.auth === "function" ? firebase.auth() : undefined;
const fbStorage = typeof firebase.storage === "function" ? firebase.storage() : undefined;
