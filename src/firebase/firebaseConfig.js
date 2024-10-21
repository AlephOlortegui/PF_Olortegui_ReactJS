// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"; // Si usas Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIeUoHnvt__zsiXvrieVsGXZkkelsUOvw",
  authDomain: "comision-60025-react-js.firebaseapp.com",
  projectId: "comision-60025-react-js",
  storageBucket: "comision-60025-react-js.appspot.com",
  messagingSenderId: "843487218936",
  appId: "1:843487218936:web:5dc34a11236d0605a2ff0d",
  measurementId: "G-H79724HFR4"
};

// Initialize Firebase
const FireApp = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(FireApp);
// get my collection products - para Tienda.jsx
const productsCollectionRef = collection(db,'products')

export {FireApp, db, productsCollectionRef}