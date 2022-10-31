const userEl = document.getElementById("nameSurname");
const KmEl = document.getElementById("numKm");
const ageEl = document.getElementById("age");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
let Utente;
let kmUtente;
let etaUtente;
let prezzoBiglietto;
let sconto;
let prezzoFinale;


submit.addEventListener("click", function () {

    if((userEl == "")||(userEl == "undefined")){
        alert("inserisci il tuo nome e cognome");
        
        
        
    }else if((KmEl == "") || (KmEl == "undefined")){
        alert("inserisci i km da percorrere");
        
    }else if((ageEl == "") || (ageEl == "undefined")){
        alert("inserisci la tua categoria d'età");
        
    }
    else {
        // Associo valore alla variabile
        Utente = userEl.value;
        console.log(Utente);
        kmUtente = KmEl.value;
        console.log(kmUtente);
        etaUtente = ageEl.value;
        console.log(etaUtente);
        

        

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
        outputName.innerHTML = `il tuo nome: ${Utente}`;

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
    KmEl.value = "";
    ageEl.value = "standard";





});


