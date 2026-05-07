import { Movie } from "../Movie/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

/* Correspondance entre le nom de catégorie (tel qu'il est en BDD) et le fichier de fond */
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

let MovieCategory = {};

MovieCategory.format = function (categoryName, films) {
  let categoryHtml = template;

  /* Fond : on cherche le fichier correspondant, sinon fond drame par défaut */
  let bgFile = backgroundMap[categoryName] || "background-drame.jpg";
  categoryHtml = categoryHtml.replaceAll("{{backgroundImage}}", "../server/images/" + bgFile);
  categoryHtml = categoryHtml.replaceAll("{{categoryName}}", categoryName);

  /* Nombre total de films dans la catégorie (pour le bouton) */
  categoryHtml = categoryHtml.replaceAll("{{totalCount}}", films.length);

  /* Description de la catégorie — tous les films du groupe partagent la même catégorie,
     donc on lit la description sur le premier film du tableau */
  let description = films[0].category_description || "";
  categoryHtml = categoryHtml.replaceAll("{{description}}", description);

  /* On affiche au maximum 5 films */
  let filmsVisibles = films.slice(0, 5);
  let moviesHtml = Movie.format(filmsVisibles);
  categoryHtml = categoryHtml.replaceAll("{{movies}}", moviesHtml);

  /* Carte "+N" pour les films non affichés */
  let restant = films.length - 5;
  let moreCard = "";
  if (restant > 0) {
    moreCard = `
      <div class="movie-card movie-card--more" onclick="C.handlerGroup('${categoryName}')">
        <div class="movie-card__poster movie-card__poster--more">
          <span class="movie-card__more-count">${restant}</span>
          <p class="movie-card__more-label">Programmes<br>disponibles</p>
        </div>
      </div>
    `;
  }
  categoryHtml = categoryHtml.replaceAll("{{moreCard}}", moreCard);

  return categoryHtml;
};

export { MovieCategory };
