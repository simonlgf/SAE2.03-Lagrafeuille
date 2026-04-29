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
    // Récupère le paramètre age s'il existe
    $minAge = isset($_REQUEST['age']);
    
    // Appelle la fonction du modèle en passant l'âge minimum
    $movies = getAllMovies($minAge);
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
