
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Crea un ciclo for per ripetere le celle

function caselle(celle) {

    for (var i = 1; i <= celle; i++) {
        document.getElementById("contenitore").innerHTML += `<div class="quadrato">${i}</div>`;
    }
}

// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
var celleUtente = prompt("Inserisci il numero di celle desiderato");

caselle(celleUtente);

// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.
// Crea il click con la funzione

document.getElementById("contenitore").addEventListener("click", 

     function(evento) {

        alert("Il numero della casella selezionata è " + (evento.target.innerHTML) );

        evento.target.classList.toggle('rosso');

        console.log(evento.target);
}); 

