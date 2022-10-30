const userEl = document.getElementById("nameSurname");
const KMEl = document.getElementById("Km");
const ageEl = document.querySelector("#age");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
let nomeUtente;
let cognomeUtente;
let kmUtente;
let etaUtente;
let prezzoBiglietto;
let sconto;
let prezzoFinale;


submit.addEventListener("click", function () {

    if(userEl.value === " " || KMEl.value === " " || ageEl.value === " "){
        alert("inserisci tutti i dati richiesti");
    }else {
        // Associo valore alla variabile
        nomeUtente = userEl.value;
        kmUtente = KMEl.value;
        etaUtente = ageEl.value;

        

        // CALCOLO PREZZO biglietto 
         prezzoBiglietto = kmUtente * 0.21;

        //  calcolo sconto
        if(etaUtente == "minorenne"){
            sconto = prezzoBiglietto * 0.2;
        }else if(etaUtente == "over65"){
            sconto = prezzoBiglietto * 0.4;
        }else{
            sconto = 0;
        }
        
        // calcolo prezzo finale
        prezzoFinale = prezzoBiglietto - sconto;

            

        const outputName = document.querySelector("#user");
        outputName.innerHTML = `il tuo nome: ${nomeUtente}`;

        const outputAge = document.querySelector("#categoria");
        outputAge.innerHTML = `la tua categoria: ${etaUtente}`;

        const outputPrice = document.querySelector("#price");
        outputPrice.innerHTML = `il prezzo del tuo biglietto è: ${prezzoFinale.toFixed(2)}€`;

        const outputDiscount = document.querySelector("#discount");
        outputDiscount.innerHTML = `lo sconto applicato è: ${sconto.toFixed(2)}€`;




    }    
});

reset.addEventListener("click", function () {
    userEl.value = "";
    KMEl.value = "";
    ageEl.value = "Standard";

});