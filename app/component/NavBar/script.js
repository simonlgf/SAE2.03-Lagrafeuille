let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

// TODO ITÉRATION 3 : Modifier la NavBar pour permettre de revenir à la liste des films
// Ajouter un lien/menu qui appelle C.handlerHome() pour afficher la liste des films
// Le NavBar doit avoir au moins deux éléments :
// 1. Un menu pour accéder à la page "About" (déjà existant)
// 2. Un menu pour accéder à la liste des films (à implémenter)
NavBar.format = function (hAbout, hHome) {
  let html = template;
  html = html.replace("{{hAbout}}", hAbout);
  html = html.replace("{{hHome}}", hHome);
  // TODO : Ajouter le remplacement pour {{hHome}} 
  // ou modifier le template pour inclure le lien vers la liste des films
  return html;
};

export { NavBar };
