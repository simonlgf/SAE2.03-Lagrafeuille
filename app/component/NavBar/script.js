let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function (hAbout, hHome, profiles) {
  let html = template;

  html = html.replace("{{hAbout}}", hAbout);
  html = html.replace("{{hHome}}", hHome);

  let optionsHtml = "";
  for (let profile of profiles) {
    optionsHtml += `<option value="${profile.id}">${profile.name}</option>`;
  }
  html = html.replace("{{profiles}}", optionsHtml);

  return html;
};

export { NavBar };
