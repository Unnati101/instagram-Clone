import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import "firebase/compat/auth";
import "firebase/compat/storage";



firebase.initializeApp({
  apiKey: "AIzaSyDBe94-csKvYBjWjYq8QycRAsNUwhkYTeU",
  authDomain: "instagram-clone-react-da601.firebaseapp.com",
  projectId: "instagram-clone-react-da601",
  storageBucket: "instagram-clone-react-da601.appspot.com",
  messagingSenderId: "782732982100",
  appId: "1:782732982100:web:0f3aa71951e49d853ebac1",
  measurementId: "G-V6RQ0RWT92"
});
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

//export default db: