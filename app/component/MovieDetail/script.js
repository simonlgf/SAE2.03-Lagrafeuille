let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};


MovieDetail.format = function (film) {
  let html = template;
  let imagePath = "../server/images/" + film.image;

  // Remplace tous les placeholders
  html = html.replaceAll("{{title}}", film.name);
  html = html.replaceAll("{{image}}", imagePath);
  html = html.replaceAll("{{director}}", film.director);
  html = html.replaceAll("{{year}}", film.year);
  html = html.replaceAll("{{category}}", film.category);
  // Si min_age vaut 0, on affiche "Tout public" plutôt que "0+"
  let age_label = Number(film.min_age) === 0 ? "Tout public" : film.min_age;
  html = html.replaceAll("{{age_label}}", age_label);
  html = html.replaceAll("{{description}}", film.description);

  // Utilise l'URL du trailer telle qu'elle est stockée dans la base de données
  html = html.replaceAll("{{trailer}}", film.trailer || "");

  return html;
};

export { MovieDetail };
