let templateFile = await fetch('./component/ProfileEdit/template.html');
let template = await templateFile.text();

let templateLIFile = await fetch('./component/ProfileEdit/template-LI.html');
let templateLI = await templateLIFile.text();

let ProfileEdit = {};

ProfileEdit.formatList = function (profiles) {
    let items = "";
    for (let profile of profiles) {
        let row = templateLI;
        let anneeNaissance = new Date(profile.date_naissance).getFullYear();
        let anneeActuelle  = new Date().getFullYear();
        let age = anneeActuelle - anneeNaissance;
        let ageLabel = age <= 0 ? "Tout public" : age + " ans";
        row = row.replaceAll("{{name}}", profile.name);
        row = row.replaceAll("{{age_label}}", ageLabel);
        row = row.replaceAll("{{id}}", profile.id);
        items += row;
    }
    return template.replace("{{items}}", items);
};

export { ProfileEdit };
