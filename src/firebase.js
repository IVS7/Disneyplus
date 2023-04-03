import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDliFNHGch5e8xIl91sloBOq3cVZqqls5o",
    authDomain: "disney-app-46a0c.firebaseapp.com",
    projectId: "disney-app-46a0c",
    storageBucket: "disney-app-46a0c.appspot.com",
    messagingSenderId: "588733420694",
    appId: "1:588733420694:web:ec23b4e83a3ab2e2a05eb7",
    measurementId: "G-GSQ88HJVYJ"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;