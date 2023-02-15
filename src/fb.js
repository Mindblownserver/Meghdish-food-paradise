import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBdCaVqWmb1Ay2rIuTiHyU0Um7VlT7GElQ",
  authDomain: "meghdish-food-paradise.firebaseapp.com",
  projectId: "meghdish-food-paradise",
  storageBucket: "meghdish-food-paradise.appspot.com",
  messagingSenderId: "803181228362",
  appId: "1:803181228362:web:426807645bf2f22a9811b3",
  measurementId: "G-4J04QEBC0C"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({timestampsInSnapshots: true});
export default db;
