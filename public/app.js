
$(function(){
	$('#bouton').on('click', function(e){	// On écoute l'évènement click sur le bouton
		e.preventDefault();					// On prévient le comportement pas défaut du navigateur
		$.get( "/hello", function(data) {	// On effectue une requete AJAX de type GET sur la route "/hello"
			$("body").append( data );		// On append le résultat de cette requete dans le body
		});
	});
});