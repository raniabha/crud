// import * as firebase from "firebase";
import firebase from 'firebase'
// firebase.initializeApp({ ... })

var firebaseConfig = {
    apiKey: "AIzaSyAlHm50OXAa48H_Sx20rVJPQeCNzzD9_eg",
    authDomain: "abha-app.firebaseapp.com",
    databaseURL: "https://abha-app.firebaseio.com",
    projectId: "abha-app",
    storageBucket: "abha-app.appspot.com",
    messagingSenderId: "1037114209233",
    appId: "1:1037114209233:web:c7c6e55dfa6f65728c66f0",
    measurementId: "G-YDYSXGRHWH"
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();