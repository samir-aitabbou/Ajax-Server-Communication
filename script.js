//  Étape 1 — Lancement d’une requête HTTP

// ancien code de compatibilité, aujourd’hui inutile
// XMLHttpRequest c'est l'objet responsable Pour faire une requête HTTP vers le serveur à l’aide de JavaScript
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+...
    httpRequest = new XMLHttpRequest();
}
else if (window.ActiveXObject) { // IE 6 et antérieurs
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

// indiquer à l’objet httpRequest le nom de la fonction JavaScript qui traitera la réponse du serveur.
httpRequest.onreadystatechange = nomDeLaFonction;
// ou 
// httpRequest.onreadystatechange = function() {
//     // instructions de traitement de la réponse
// };

// après avoir déclaré ce qui se produit lorsque la réponse est reçue, il s’agit de lancer effectivement la requête
httpRequest.open('GET', 'http://www.example.org/some.file', true);
httpRequest.send();


    //// Étape 2 — Gestion de la réponse du serveur////

//vérifier l’état de la requête
if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // tout va bien, la réponse a été reçue
} else {
    // pas encore prête
}

//Ensuite, vérifiez le code de statut HTTP de la réponse du serveur.
if (httpRequest.status === 200) {
    // parfait !
} else {
    // il y a eu un problème avec la requête,
    // par exemple la réponse peut être un code 404 (Non trouvée)
    // ou 500 (Erreur interne au serveur)
}

//vous pouvez traiter à votre guise les données envoyées par le serveur. Il existe deux manières d’accéder à ces données :
//httpRequest.responseText
//httpRequest.responseXML

      //// Étape 3 — Un exemple simple ////
