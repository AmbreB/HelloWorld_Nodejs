#  Faire un Hello world avec Node.js !

Nous allons réaliser une petite application sous Node.js qui aura pour but de nous afficher un petit Hello World dans un premier temps ! Nous allons donc installer les outils nécessaires à la réalisation de cette application.

##Mise en place

Tout d'abord, clonez le repository sur votre machine. Dans le dossier du projet, lancez

```
npm install
```

Cette commande va permettre d'installer toutes les dépendances contenues dans le package.json

Pour démarrer le projet, ouvrez un terminal et exécutez cette commande dans le dossier du projet :

```
nodemon index.js
```

Magic happens on your http://localhost:3000

#Wiki

##Node.js

Node.js est un environnement d'exécution JavaScript, c'est à dire qu'il va interpréter et exécuter du code JavaScript. Il va nous permettre d'utiliser du JavaScript en dehors du navigateur, sur un serveur par exemple. Il est très pratique pour réaliser n'importe quelle application qui doit répondre à de nombreuses requêtes rapidement et efficacement, en temps réel, comme un chat par exemple. 

Pour l'installer, il suffit de taper ces deux commandes :

```
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
```
```
sudo apt-get install -y nodejs
```
Lancez la commande suivante pour savoir si l'installation s'est bien passée :
```
node -v
```
La console vous affichera alors la version de node que vous venez d'installer. 

Si ce n'est pas le cas, et que l'installation ne s'est pas faite, essayez les commandes suivantes :
```
sudo ln -s /usr/bin/nodejs /usr/local/bin/node
```
```
sudo ln -s /usr/bin/npm /usr/local/bin/npm
```

##Node Package Manager (npm)

C'est le gestionnaire de paquets officiel pour Node.js, il gère les dépendances pour une application. Il s'utilise à quelques détails près comme Bower. Il est inclus dans l'installation de Node.js.


##Nodemon

Nodemon facilite le développement d'une application Node.js, il relance le serveur à chaque changement d'un fichier, ce qui évite de devoir le relancer manuellement. Pour l'installer, lancer cette commande :
```
sudo npm install -g nodemon
``` 
Pour l'utiliser, il vous suffit de lancer cette commande là ou se trouve votre fichier serveur (app.js, index.js ou server.js...) :
```
nodemon mon_serveur.js
``` 

##Express.js

Express est un framework qui va nous faciliter la construction d'application sous Node.js. Il va nous permettre de gérer les routes.