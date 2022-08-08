import firebase from 'firebase/compat/app';

var firebaseConfig = {
    apiKey: "AIzaSyAYxYmTQQ0FLkItNNbVYDdfULkFgH78oME",
    authDomain: "projetos-b094e.firebaseapp.com",
    databaseURL: "https://projetos-b094e.firebaseio.com",
    projectId: "projetos-b094e",
    storageBucket: "",
    messagingSenderId: "697572185474",
    appId: "1:697572185474:web:44549f4a87ed0d04"
};

export const app = firebase.initializeApp(firebaseConfig);