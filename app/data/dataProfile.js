// URL du serveur — même valeur que dans dataMovie.js
let HOST_URL = "https://mmi.unilim.fr/~lagrafeuille4/SAE2.03-Lagrafeuille";

// TODO ITÉRATION 6 : Créer l'objet DataProfile
// C'est le même principe que DataMovie dans dataMovie.js :
// on regroupe ici toutes les requêtes HTTP liées aux profils utilisateur.
let DataProfile = {};

// TODO ITÉRATION 6 : Compléter la fonction DataProfile.read()
// Cette fonction doit interroger le serveur pour obtenir la liste des profils.
// Inspirez-vous de DataMovie.requestMovies() dans dataMovie.js :
//   1. Faire un fetch vers HOST_URL + "/server/script.php?todo=readprofiles"
//   2. Récupérer la réponse en JSON avec .json()  (comme dans requestMovies)
//   3. Retourner les données
DataProfile.read = async function () {
    // TODO : remplacer ce bloc par le fetch (voir DataMovie.requestMovies)
}

export { DataProfile };