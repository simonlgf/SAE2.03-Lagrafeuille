<?php

/** ARCHITECTURE PHP SERVEUR  : Rôle du fichier controller.php
 * 
 *  Dans ce fichier, on va définir les fonctions de contrôle qui vont traiter les requêtes HTTP.
 *  Les requêtes HTTP sont interprétées selon la valeur du paramètre 'todo' de la requête (voir script.php)
 *  Pour chaque valeur différente, on déclarera une fonction de contrôle différente.
 * 
 *  Les fonctions de contrôle vont éventuellement lire les paramètres additionnels de la requête, 
 *  les vérifier, puis appeler les fonctions du modèle (model.php) pour effectuer les opérations
 *  nécessaires sur la base de données.
 *  
 *  Si la fonction échoue à traiter la requête, elle retourne false (mauvais paramètres, erreur de connexion à la BDD, etc.)
 *  Sinon elle retourne le résultat de l'opération (des données ou un message) à includre dans la réponse HTTP.
 */

/** Inclusion du fichier model.php
 *  Pour pouvoir utiliser les fonctions qui y sont déclarées et qui permettent
 *  de faire des opérations sur les données stockées en base de données.
 */
require("model.php");



function readMoviesController(){
    // Si le paramètre age est absent → aucun profil sélectionné → on passe null (tous les films)
    // Si age est présent → profil sélectionné (0 = Tout public, 12, 16…) → on filtre
    $age = isset($_REQUEST['age']) ? intval($_REQUEST['age']) : null;
    $movies = getAllMovies($age);
    return $movies;
}

function addMovieController(){
  $name = $_REQUEST['name'];
  $year = $_REQUEST['year'];
  $length = $_REQUEST['length'];
  $description = $_REQUEST['description'];
  $director = $_REQUEST['director'];
  $id_category = $_REQUEST['id_category'];
  $image = $_REQUEST['image'];
  $trailer = $_REQUEST['trailer'];
  $min_age = $_REQUEST['min_age'];
  $valide = addMovie($name, $year, $length, $description, $director, $id_category, $image, $trailer, $min_age);
  if ($valide!=0){
    return "Le film a été ajouté avec succès";
  }
  else{
    return false;
  }
}

function addProfileController(){
  $name           = $_REQUEST['name'];
  $image          = $_REQUEST['image'];
  $date_naissance = $_REQUEST['date_naissance'];
  $valide = addProfile($name, $image, $date_naissance);
  if ($valide != 0){
    return "Le profil a été ajouté avec succès";
  } else {
    return false;
  }
}





// TODO ITÉRATION 6 : Ajouter la fonction readProfilesController()
// Même structure que readMoviesController() ci-dessus (pas de paramètre à lire).
// Elle doit simplement appeler getAllProfiles() depuis model.php et retourner le résultat.
// function readProfilesController() {
//     $profiles = getAllProfiles();
//     return $profiles;
// }

function updateProfileController(){
    $id = isset($_REQUEST['id']) ? intval($_REQUEST['id']) : 0;
    if ($id <= 0) {
        return false;
    }
    $name           = $_REQUEST['name']           ?? '';
    $image          = $_REQUEST['image']          ?? '';
    $date_naissance = $_REQUEST['date_naissance'] ?? '';
    $result = updateProfile($id, $name, $image, $date_naissance);
    if ($result) {
        return "Le profil a été modifié avec succès";
    }
    return false;
}

function readProfilesController(){
    $profiles = getAllProfiles();
    return $profiles;
}


// TODO ITÉRATION 3 : Ajouter la fonction readMovieDetailController()
// Cette fonction doit :
// 1. Récupérer le paramètre 'id' depuis la requête HTTP ($_REQUEST['id'])
// 2. Vérifier que l'ID est présent et valide (entier positif)
// 3. Appeler la fonction getMovieDetail($id) du modèle
// 4. Retourner les détails du film
function readMovieDetailController(){
  $id_bool = isset($_REQUEST['id']);
  if (!$id_bool || $_REQUEST['id'] <= 0 || !is_numeric($_REQUEST['id'])){
    return false;
  }
  else{
    return getMovieDetail($_REQUEST['id']);
  }
  

    // TODO : Implémenter cette fonction
    // Récupérer l'ID du film depuis les paramètres de la requête
    // Vérifier que l'ID existe
    // Appeler getMovieDetail($id) et retourner le résultat
}
