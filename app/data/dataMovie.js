// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~lagrafeuille4/SAE2.03-Lagrafeuille";//"http://mmi.unilim.fr/~????";

let DataMovie = {};

DataMovie.requestMovies = async function(){
    // fetch permet d'envoyer une requête HTTP à l'URL spécifiée. 
    // L'URL est construite en concaténant HOST_URL à "/server/script.php?todo=" et la valeur de la variable. 
    // L'URL finale dépend de la valeur de HOST_URL et du paramètre.
    // TODO ITÉRATION 4 : Après modification du serveur, les films incluront maintenant un champ 'category'
    // qui contient le nom de la catégorie auquel appartient chaque film.
    // Vous pouvez utiliser ce champ pour grouper les films par catégorie côté client
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");
    // answer est la réponse du serveur à la requête fetch.
    // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
    // Ces données (data) sont automatiquement converties en objet JavaScript.
    let data = await answer.json();
    // Enfin, on retourne ces données.
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
