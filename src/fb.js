import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({timestampsInSnapshots: true});
export default db;
