let templateFile = await fetch('./component/ProfileEdit/template.html');
let template = await templateFile.text();

let templateLIFile = await fetch('./component/ProfileEdit/template-LI.html');
let templateLI = await templateLIFile.text();

let ProfileEdit = {};

ProfileEdit.formatList = function (profiles) {
    let items = "";
    for (let profile of profiles) {
        let row = templateLI;
        let ageLabel = Number(profile.age) === 0 ? "Tout public" : profile.age + "+";
        row = row.replaceAll("{{name}}", profile.name);
        row = row.replaceAll("{{age_label}}", ageLabel);
        row = row.replaceAll("{{id}}", profile.id);
        items += row;
    }
    return template.replace("{{items}}", items);
};

export { ProfileEdit };
