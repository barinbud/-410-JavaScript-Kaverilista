const kaverit = [];

function paivitaLista() {
    const lista = document.getElementById("kaverilista");
    lista.innerHTML = ""; 
    for (const nimi of kaverit) {
        lista.innerHTML += `<li>${nimi}</li>`;
    }
}

function lisaaNimi() {
    const input = document.getElementById("nimiInput").value.trim();
    if (input) { 
        kaverit.push(input);
        document.getElementById("nimiInput").value = ""; 
        paivitaLista();
    }
}

function poistaNimi() {
    const input = document.getElementById("nimiInput").value.trim();
    const indeksi = kaverit.indexOf(input);
    if (indeksi !== -1) { 
        kaverit.splice(indeksi, 1);
        paivitaLista();
    }
}

function jarjestaLista() {
    kaverit.sort(); 
    paivitaLista();
}
