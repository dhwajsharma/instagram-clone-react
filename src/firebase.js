import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCxWF_oKNTRg79oiyw94Fe4GZguuyT40OA",
    authDomain: "instagram-clone-react-ab3ed.firebaseapp.com",
    projectId: "instagram-clone-react-ab3ed",
    storageBucket: "instagram-clone-react-ab3ed.appspot.com",
    messagingSenderId: "378733530011",
    appId: "1:378733530011:web:6ed64cc108a2df9367af3e"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }