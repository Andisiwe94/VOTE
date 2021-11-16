// politic party variable
let anc = 0;
let da = 0;
let eff = 0;

function vote() {

    const name = document.getElementById("name").value;
    const age = document.getElementById("name").value;
    const nationality = document.getElementById("nationality").value;
    const party = document.getElementById("party").value;

    console.log(nationality);

    const ancDisplay = document.getElementById("ancTotal");
    const daDisplay = document.getElementById("daTotal");
    const effDisplay = document.getElementById("effTotal");

    alert(party);

    if (name == "") {
        alert("Please provide your name");
        return;
    }

    if (age < 17) {
        alert("You are under, you cannot vote");
        return;
    }

    if (nationality == "Foreigners") {
        alert("only south africa can vote");
        return;
    }

    if (party == "party") {
        alert("which party won");
        return;
    }


    if (party == "ANC") {
        anc++;
        ancDisplay.innerHTML = anc;
        return;
    }

    if (party == "IFP") {
        ifp++;
        ifpDisplay.innerHTML = ifp;
        return;
    }

    if (party == "DA") {
        da++;
        daDisplay.innerHTML = da;
        return;
    }

    if (party == "EFF") {
        eff++;
        effDisplay.innerHTML = eff;
        return;
    }

    if (party == "COPE") {
        cope++;
        copeDisplay.innerHTML = cope;
        return;
    }

    if (party == "ATM") {
        atm++;
        atmDisplay.innerHTML = atm;
        return;
    }

    if (party == "UDM") {
        udm++;
        udmDisplay.innerHTML = udm;
        return;
    }

    if (party == "NFP") {
        nfp++;
        nfpDisplay.innerHTML = nfp;
        return;
    }

    if (party == "PAC") {
        pac++;
        pacDisplay.innerHTML = pac;
        return;
    }
}