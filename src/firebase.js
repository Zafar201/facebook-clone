import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDKkIDaOnzsoB2XaWiUMbWIRfDLvzlBpQI",
    authDomain: "facebook-clone-5f757.firebaseapp.com",
    databaseURL: "https://facebook-clone-5f757.firebaseio.com",
    projectId: "facebook-clone-5f757",
    storageBucket: "facebook-clone-5f757.appspot.com",
    messagingSenderId: "10158636257",
    appId: "1:10158636257:web:c8210ebbfbe7a371034ba0",
    measurementId: "G-D3C3DW4XED"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;
