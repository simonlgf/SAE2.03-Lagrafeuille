<?php
/**
 * Ce fichier contient toutes les fonctions qui réalisent des opérations
 * sur la base de données, telles que les requêtes SQL pour insérer, 
 * mettre à jour, supprimer ou récupérer des données.
 */

/**
 * Définition des constantes de connexion à la base de données.
 *
 * HOST : Nom d'hôte du serveur de base de données, ici "localhost".
 * DBNAME : Nom de la base de données
 * DBLOGIN : Nom d'utilisateur pour se connecter à la base de données.
 * DBPWD : Mot de passe pour se connecter à la base de données.
 */
define("HOST", "localhost");
define("DBNAME", "lagrafeuille4");
define("DBLOGIN", "lagrafeuille4");
define("DBPWD", "lagrafeuille4");


/**
 * Récupère tous les films disponibles
 * @param int $minAge Âge minimum pour filtrer les films (optionnel)
 * @return array|false Tableau des films ou false en cas d'erreur
 */
function getAllMovies($minAge = 0) {
    try {
        // Connexion à la base de données
        $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
        
        // Requête SQL pour récupérer les films
        // On retourne seulement id, name, image comme demandé dans les consignes
        $sql = "SELECT id, name, image FROM Movie";
        
        // Si un âge minimum est spécifié, on filtre par min_age
        if ($minAge > 0) {
            $sql .= " WHERE min_age <= :minAge";
        }
        
        // On ordonne par le titre
        $sql .= " ORDER BY name ASC";
        
        // Prépare la requête SQL
        $stmt = $cnx->prepare($sql);
        
        // Si un âge minimum est spécifié, on lie le paramètre
        if ($minAge > 0) {
            $stmt->bindParam(':minAge', $minAge, PDO::PARAM_INT);
        }
        
        // Exécute la requête SQL
        $stmt->execute();
        
        // Récupère les résultats de la requête sous forme d'objets
        $res = $stmt->fetchAll(PDO::FETCH_OBJ);
        
        return $res; // Retourne les résultats
    } catch (PDOException $e) {
        error_log("Erreur de base de données: " . $e->getMessage());
        return false;
    }
}