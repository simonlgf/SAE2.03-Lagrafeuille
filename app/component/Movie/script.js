let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};

/**
 * Formate un ou plusieurs films au format HTML
 * @param {Object|Array} films - Un film (objet) ou un tableau de films
 * @param {Function} handlerClick - Fonction callback pour le clic (optionnel)
 * @returns {string} HTML formaté
 */
Movie.format = function (films, handlerClick = "") {

  let html = "";

  // Parcourt tous les films et crée le HTML pour chacun
  for (let film of films) {
    let filmHtml = template;
    let imagePath = "../server/images/" + film.image;
    // Remplace tous les placeholders en une seule passe
    filmHtml = filmHtml.replaceAll("{{title}}", film.name);
    filmHtml = filmHtml.replaceAll("{{image}}", imagePath);
    filmHtml = filmHtml.replaceAll("{{year}}", film.year || "");
    /* Affiche la durée en minutes si elle existe, sinon chaîne vide */
    let duration = "";
    if (film.length) {
      duration = film.length + "min";
    }
    filmHtml = filmHtml.replaceAll("{{duration}}", duration);
    filmHtml = filmHtml.replaceAll("{{director}}", film.director || "");

    // TODO ITÉRATION 3 : Ajouter l'ID du film dans le handler onclick
    // Chaque film doit être cliquable et passer son ID à la fonction C.handlerDetail(X)
    // Formater le handlerClick avec l'ID du film : onclick="C.handlerDetail(X)"
    // où X est l'identifiant du film (film.id)

    handlerClick = `onclick="C.handlerDetail(${film.id})"`;


    filmHtml = filmHtml.replaceAll("{{handlerClick}}", handlerClick);
    html += filmHtml;
  }

  return html;
};

export { Movie };
