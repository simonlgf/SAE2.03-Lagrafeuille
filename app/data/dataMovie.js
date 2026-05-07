// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~lagrafeuille4/SAE2.03-Lagrafeuille_graphique";//"http://mmi.unilim.fr/~????";

let DataMovie = {};

DataMovie.requestMovies = async function(age = null){
    // Si age vaut null (aucun profil sélectionné), on n'envoie pas le paramètre → le serveur retourne tous les films
    // Si age vaut 0 (profil Tout public), on l'envoie → le serveur filtre sur min_age <= 0
    let url = HOST_URL + "/server/script.php?todo=readmovies";
    if (age !== null) {
        url += "&age=" + age;
    }
    let answer = await fetch(url);
    let data = await answer.json();
    return data;
}

// TODO ITÉRATION 3 : Ajouter une fonction requestMovieDetails(id)
// Cette fonction doit interroger le serveur avec les paramètres: ?todo=readMovieDetail&id=X
// Elle doit retourner tous les détails du film : titre, affiche, description, réalisateur, année, catégorie, restrictions d'âge, trailer
DataMovie.requestMovieDetails = async function(movieId){
    let answer_serv = await fetch(HOST_URL + "/server/script.php?todo=readmoviedetail&id=" + movieId);
    let data_serv = await answer_serv.json();
    return data_serv;
    // TODO : Implémenter la requête fetch vers le serveur
    // Récupérer les détails complets du film avec l'ID spécifié
}

export {DataMovie};
