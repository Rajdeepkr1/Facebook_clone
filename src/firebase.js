import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBJHuyzNV5-dCll7ccXYKKRnJYAVM7jKR8",
    authDomain: "facebook-d27c5.firebaseapp.com",
    projectId: "facebook-d27c5",
    storageBucket: "facebook-d27c5.appspot.com",
    messagingSenderId: "424960547847",
    appId: "1:424960547847:web:5458d9b85b39eaf57e9ea2",
    measurementId: "G-8GDZ584CML"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;