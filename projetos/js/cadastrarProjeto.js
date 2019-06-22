// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAYxYmTQQ0FLkItNNbVYDdfULkFgH78oME",
    authDomain: "projetos-b094e.firebaseapp.com",
    databaseURL: "https://projetos-b094e.firebaseio.com",
    projectId: "projetos-b094e",
    storageBucket: "",
    messagingSenderId: "697572185474",
    appId: "1:697572185474:web:44549f4a87ed0d04"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref()
console.log(messagesRef);

document.getElementById('formulario').addEventListener('submit', formSubmit)

function formSubmit(e) {
    e.preventDefault();
    var titulo = getVal('titulo');
    var tecnologias = getVal('tecnologias')
    var texto = getVal('texto');
    var path = getVal('pathproject');
    let projeto = new Projeto(titulo, tecnologias, texto, path)
    saveMessage(projeto)
    clearVal('titulo')
    clearVal('tecnologias')
    clearVal('texto')
    clearVal('pathproject')
}


function saveMessage(projeto) {
    var newMessageRef = messagesRef.push()
    newMessageRef.set({
        titulo: projeto.titulo,
        tecnologias: projeto.tecnologias,
        texto: projeto.texto,
        path: projeto.path
    });
}

function getVal(id) {
    return document.getElementById(id).value
}

function clearVal(id) {
    document.getElementById(id).value = ''
}