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


function getAllMovies(){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    
    // TODO ITÉRATION 4 : Modifier la requête SQL pour inclure le nom de la catégorie
    // Pour le moment, on ne récupère que id, name, image
    // Il faut ajouter le nom de la catégorie pour pouvoir grouper les films par catégorie côté client
    // 
    // Indice : Utiliser une LEFT JOIN avec la table Category sur Movie.id_category = Category.id
    // Vous devez aussi donner un alias au nom de la catégorie (par exemple 'category')
    // 
    // Exemple de structure attendue : id, name, image, category
    $sql = "select Movie.id, Movie.name, Movie.image, Category.name as category from Movie LEFT JOIN Category ON Movie.id_category = Category.id";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}

function addMovie($name, $year, $length, $description, $director, $id_category, $image, $trailer, $min_age){
    try {
        $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
        $sql = "INSERT INTO Movie (name, year, length, description, director, id_category, image, trailer, min_age) VALUES (:name, :year, :length, :description, :director, :id_category, :image, :trailer, :min_age)";
        $stmt = $cnx->prepare($sql);
        $result = $stmt->execute(array(
            ':name' => $name,
            ':year' => $year,
            ':length' => $length,
            ':description' => $description,
            ':director' => $director,
            ':id_category' => $id_category,
            ':image' => $image,
            ':trailer' => $trailer,
            ':min_age' => $min_age
        ));
        return $result ? 1 : 0;
    } catch (PDOException $e) {
        error_log("Erreur de base de données: " . $e->getMessage());
        return false;
    }
}


function addProfile($name, $image, $age)
{ 
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "INSERT INTO UserProfile (name, image, age) VALUES (:name, :image, :age)";
    $stmt = $cnx->prepare($sql);
    $result = $stmt->execute(array(
        ':name' => $name,
        ':image' => $image,
        ':age' => $age
    ));
    return $result ? 1 : 0;
}

// TODO ITÉRATION 6 : Ajouter la fonction getAllProfiles()
// Même structure que getAllMovies() ci-dessus, mais pour la table UserProfile.
// La requête SQL doit récupérer au minimum : id, name, image
// Exemple de requête : SELECT id, name, image FROM UserProfile
// Retourner les résultats avec fetchAll(PDO::FETCH_OBJ) comme dans getAllMovies().

function getAllProfiles(){
    try {
        $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
        $sql = "SELECT id, name, image FROM UserProfile";
        $stmt = $cnx->prepare($sql);
        $stmt->execute();
        $res = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $res;
    } catch (PDOException $e) {
        error_log("Erreur de base de données: " . $e->getMessage());
        return false;
    }
}

// TODO ITÉRATION 3 : Ajouter une fonction getMovieDetail($movieId)
// Cette fonction doit retourner TOUS les détails d'un film basé sur son ID :
// - id, name (titre), year (année), length (durée), description (synopsis), 
// - director (réalisateur), id_category (ID de la catégorie), 
// - image (affiche), trailer (URL du trailer), min_age (restriction d'âge)
// La requête SQL doit chercher le film avec l'ID spécifié
// Exemple : SELECT * FROM Movie WHERE id = :id
function getMovieDetail($movieId) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);

    $sql = "SELECT m.*, c.name as category FROM Movie m LEFT JOIN Category c ON m.id_category = c.id WHERE m.id = :id"; 
    $stmt = $cnx->prepare($sql);
    $stmt->bindValue(':id', $movieId);
    $stmt->execute();
    $res = $stmt->fetch(PDO::FETCH_OBJ);
    return $res;
    // TODO : Implémenter cette fonction
    // 1. Connexion à la BDD
    // 2. Préparer la requête SQL SELECT * FROM Movie WHERE id = :id
    // 3. Exécuter avec le paramètre :id = $movieId
    // 4. Retourner le résultat avec PDO::FETCH_OBJ
}

