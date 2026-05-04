let HOST_URL = "https://mmi.unilim.fr/~lagrafeuille4/SAE2.03-Lagrafeuille";

let DataProfile = {};

DataProfile.read = async function(){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readprofiles");
    let data = await answer.json();
    return data;
}

export { DataProfile };
