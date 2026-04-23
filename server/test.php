<?php
/**
 * Fichier de test - À suppression après vérification
 * Teste si l'API retourne correctement les films
 */

error_reporting(E_ALL);
ini_set('display_errors', 1);

require('model.php');
require('controller.php');

// Test sans filtre d'âge
echo "=== Test 1: Récupération de tous les films ===\n";
$movies = getAllMovies();
if ($movies === false) {
    echo "ERREUR: La fonction retourne false\n";
} else {
    echo "Nombre de films: " . count($movies) . "\n";
    foreach ($movies as $movie) {
        echo "- {$movie->name} (ID: {$movie->id})\n";
    }
}

// Test avec filtre d'âge
echo "\n=== Test 2: Récupération des films avec min_age <= 12 ===\n";
$moviesAge12 = getAllMovies(12);
if ($moviesAge12 === false) {
    echo "ERREUR: La fonction retourne false\n";
} else {
    echo "Nombre de films: " . count($moviesAge12) . "\n";
    foreach ($moviesAge12 as $movie) {
        echo "- {$movie->name} (ID: {$movie->id})\n";
    }
}

echo "\n=== Test 3: Vérification format JSON ===\n";
echo json_encode($movies) . "\n";
