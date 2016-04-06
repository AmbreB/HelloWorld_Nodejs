#  Hello les campagnards ! 

#####Dans ce tuto on va utiliser socket.io. On va d'abord commencer par faire un hello world. Bien évidemment, pas un hello hello world qui sera dans une balise html dans votre index.html.. Le but va être de détecter votre connexion au serveur et une fois celle ci faite, d'afficher "hello world". Ensuite, si vous travailler bien,  on pourra commencer a s'amuser en créant un vrai tchat !
  
#####Une fois le repos cloner il vous suffit de faire un simple 'npm install'.

##### Cote serveur on va  pose une écoute pour qu'a chaque connexion on en soit averti ! 

    io.sockets.on('connection', function(socket){
		console.log('Nouvel utilisateur connecte');
	});

