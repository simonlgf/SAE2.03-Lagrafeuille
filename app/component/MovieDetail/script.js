let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function (film) {
  let html = template;
  let imagePath = "../server/images/" + film.image;

  html = html.replaceAll("{{title}}", film.name);
  html = html.replaceAll("{{image}}", imagePath);
  html = html.replaceAll("{{director}}", film.director);
  html = html.replaceAll("{{year}}", film.year);
  html = html.replaceAll("{{category}}", film.category);
  html = html.replaceAll("{{description}}", film.description);
  html = html.replaceAll("{{trailer}}", film.trailer || "");

  /* Durée en minutes si disponible, sinon vide */
  let duration = film.length ? film.length + "min" : "";
  html = html.replaceAll("{{duration}}", duration);

  return html;
};

export { MovieDetail };
