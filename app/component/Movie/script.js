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
  // Si ce n'est pas un tableau, on le convertit en tableau
  if (!Array.isArray(films)) {
    films = [films];
  }

  let html = "";

  // Parcourt tous les films et crée le HTML pour chacun
  films.forEach(film => {
    let filmHtml = template;
    let imagePath = "../server/images/" + film.image;
    // Remplace tous les placeholders en une seule passe
    filmHtml = filmHtml.replaceAll("{{title}}", film.name);
    filmHtml = filmHtml.replaceAll("{{image}}", imagePath);
    filmHtml = filmHtml.replaceAll("{{handlerClick}}", handlerClick);
    html += filmHtml;
  });

  return html;
};

export { Movie };
