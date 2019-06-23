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
var ref = firebase.database().ref()
document.getElementById('sec').value = '';
ref.on('value',gotData, errData)


function gotData(data) {
    var projetos = data.val()
    var keys = Object.keys(projetos)
    document.getElementById('loading').innerHTML = ''
    for (let it = 0; it < keys.length; it++) {
        var key = keys[it];
        var projeto = projetos[key];
        makeCard(projeto.titulo,projeto.tecnologias, projeto.texto, projeto.path)
    }
}

function errData(data) {
    console.log(data);
}