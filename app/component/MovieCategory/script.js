// TODO ITÉRATION 4 : Créer le composant MovieCategory
// Ce composant doit afficher une catégorie avec ses films associés
// 
// Le composant MovieCategory doit :
// 1. Exporter un objet MovieCategory
// 2. Avoir une méthode format(categoryName, filmsList) qui :
//    - Prend en paramètre le nom de la catégorie (string)
//    - Prend en paramètre une liste de films appartenant à cette catégorie (array)
//    - Retourne le HTML formaté pour afficher la catégorie
//
// Structure du HTML attendu :
// <section class="category-section">
//   <h2 class="category-title">{categoryName}</h2>
//   <div class="category-movies">
//     {films formatés avec Movie.format()}
//   </div>
// </section>
//
// Indice : Vous devez importer le composant Movie pour afficher les films
// et la fonction template.html pour la structure HTML

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

// TODO : À implémenter
// Import du composant Movie pour afficher les films
import { Movie } from "../Movie/script.js";

let MovieCategory = {};

/**
 * Formate une catégorie avec ses films au format HTML
 * @param {string} categoryName - Nom de la catégorie
 * @param {Array} films - Liste des films de cette catégorie
 * @returns {string} HTML formaté
 */
MovieCategory.format = function (categoryName, films) {
  // TODO : À implémenter
  // 1. Cloner le contenu du template
  // 2. Remplacer {{categoryName}} par le nom de la catégorie reçu en paramètre
  // 3. Formater la liste des films en appelant Movie.format(films)
  // 4. Remplacer {{movies}} par le HTML formaté des films
  // 5. Retourner le template complété
  
  let categoryHtml = template;
  
  // Remplacer le nom de la catégorie
  categoryHtml = categoryHtml.replaceAll("{{categoryName}}", categoryName);
  
  // Formater les films et les insérer dans le template
  let moviesHtml = Movie.format(films);
  categoryHtml = categoryHtml.replaceAll("{{movies}}", moviesHtml);
  
  return categoryHtml;
};

export { MovieCategory };
