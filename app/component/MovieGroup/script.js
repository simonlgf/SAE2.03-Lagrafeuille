import { Movie } from "../Movie/script.js";

let templateFile = await fetch("./component/MovieGroup/template.html");
let template = await templateFile.text();

/* Même correspondance que dans MovieCategory */
let backgroundMap = {
  "Action":           "background-action.jpg",
  "Animation":        "background-animation.jpg",
  "Aventure":         "background-aventure.jpg",
  "Comédie":          "background-comedie.jpg",
  "Documentaire":     "background-documentaire.jpg",
  "Drame":            "background-drame.jpg",
  "Fantaisie":        "background-fantaisie.jpg",
  "Science-fiction":  "background-sf.jpg",
  "Thriller":         "background-thriller.jpg",
  "Horreur":          "backgrounf-horreur.jpg",
};

let MovieGroup = {};

MovieGroup.format = function (categoryName, films) {
  let html = template;

  /* Image de fond */
  let bgFile = backgroundMap[categoryName] || "background-drame.jpg";
  html = html.replaceAll("{{backgroundImage}}", "../server/images/" + bgFile);

  /* Nom de la catégorie */
  html = html.replaceAll("{{categoryName}}", categoryName);

  /* Description depuis la BDD (stockée sur chaque film) */
  let description = films[0].category_description || "";
  html = html.replaceAll("{{description}}", description);

  /* Compteur et grille */
  html = html.replaceAll("{{totalCount}}", films.length);
  let moviesHtml = Movie.format(films);
  html = html.replaceAll("{{movies}}", moviesHtml);

  return html;
};

export { MovieGroup };
