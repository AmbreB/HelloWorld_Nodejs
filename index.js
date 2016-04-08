// On require les modules nécessaires à notre application
var express = require('express');
var app = express();

// On utilise express.static pour servir des fichiers statiques
// à partir du dossier "public"
app.use(express.static(__dirname + '/public'));

// On crée la route "/hello" et on y envoie "Hello World"
// via la méthode res.send
app.get('/hello', function (req, res) {
   res.send('Hello world !');
});

// L’application démarre un serveur et écoute 
// le port 3000 à la recherche de connexions
app.listen(3000, function () {
  console.log('Quelque chose se passe sur le port 3000...!');
});