// On require les modules nécessaires à notre application
var express = require('express');
var app = express();

// On utilise express.static pour servir des fichiers statiques
// à partir du dossier "public"
app.use(express.static(__dirname + '/public'));



	// Créez une route "/hello" avec Express
	// qui renverra un "Hello world"



// L’application démarre un serveur et écoute 
// le port 3000 à la recherche de connexions
app.listen(3000, function () {
  console.log('Quelque chose se passe sur le port 3000...!');
});