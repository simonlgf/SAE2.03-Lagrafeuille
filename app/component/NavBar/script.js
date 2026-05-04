let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

// TODO ITÉRATION 3 : Modifier la NavBar pour permettre de revenir à la liste des films
// Ajouter un lien/menu qui appelle C.handlerHome() pour afficher la liste des films
// Le NavBar doit avoir au moins deux éléments :
// 1. Un menu pour accéder à la page "About" (déjà existant)
// 2. Un menu pour accéder à la liste des films (à implémenter)
// TODO ITÉRATION 6 : Modifier NavBar.format() pour gérer les profils
// Ajouter un paramètre 'profiles' (tableau d'objets retourné par DataProfile.read()).
// Puis construire le HTML des <option> à partir de ce tableau, comme Movie.format() le fait pour les films :
//   let optionsHtml = "";
//   for (let profile of profiles) {
//       optionsHtml += `<option value="${profile.id}">${profile.name}</option>`;
//   }
// Enfin, remplacer {{profiles}} dans le template par optionsHtml :
//   html = html.replace("{{profiles}}", optionsHtml);
NavBar.format = function (hAbout, hHome) {
  let html = template;
  html = html.replace("{{hAbout}}", hAbout);
  html = html.replace("{{hHome}}", hHome);
  // TODO ITÉRATION 6 : ajouter ici la construction des options profils et le replace("{{profiles}}", ...)
  return html;
};

export { NavBar };
