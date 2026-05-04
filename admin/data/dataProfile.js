// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "..";//"http://mmi.unilim.fr/~????";

let DataProfile = {};

DataProfile.requestProfiles = async function(){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfiles");
    let data = await answer.json();
    return data;
}

DataProfile.addProfile = async function (fdata) {
    let config = {
        method: "POST",
        body: fdata
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addprofile", config);
    let data = await answer.json();
    return data;
}

export {DataProfile};


