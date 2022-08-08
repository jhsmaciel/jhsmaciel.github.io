import firebase from 'firebase/compat/app';

var firebaseConfig = {
    apiKey: "AIzaSyAHeyhnUtEGYuVbexDPybCjRUHsDYjaIXQ",
    authDomain: "jhsmaciel-github-io.firebaseapp.com",
    databaseURL: "https://jhsmaciel-github-io-default-rtdb.firebaseio.com",
    projectId: "jhsmaciel-github-io",
    storageBucket: "jhsmaciel-github-io.appspot.com",
    messagingSenderId: "905860526735",
    appId: "1:905860526735:web:d0c1b62eae59032adf76fa"
};

export const app = firebase.initializeApp(firebaseConfig);