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


// Bottone submit
submit.addEventListener("click", function () {
    // VERIFICARE SE I CAMPI SONO RIEMPITI
  if (userEl.value == "" || KmEl.value == "" || ageEl.value == "") {
    alert("inserisci tutti i dati richiesti");

    // VERIFICA CHE I KM SIANO UN VALORE NUMERICO E NON UNA STRINGA
  } else if (isNaN(KmEl.value)) {
    alert("inserisci un numero valido per i km");
    
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

    // CALCOLO SCONTO
    if (etaUtente == "minorenne") {
      sconto = prezzoBiglietto * 0.2;
    } else if (etaUtente == "over65") {
      sconto = prezzoBiglietto * 0.4;
    } else {
      sconto = 0;
    }

    // calcolo prezzo finale
    prezzoFinale = prezzoBiglietto - sconto;

    // OUTPUT VALORI UTEENTE
    const outputName = document.querySelector("#user");
    outputName.innerHTML = `il tuo nome: ${Utente}`;

    const outputAge = document.querySelector("#categoria");
    outputAge.innerHTML = `la tua categoria: ${etaUtente}`;

    const outputPrice = document.querySelector("#price");
    outputPrice.innerHTML = `il prezzo del tuo biglietto è: ${prezzoFinale.toFixed(
      2
    )}€`;

    // IN BASE ALLO SCONTO MESSAGGIO DIVERSO
    if (sconto > 0) {
      const outputDiscount = document.querySelector("#discount");
      outputDiscount.innerHTML = `lo sconto applicato è: ${sconto.toFixed(2)}€`;
    } else {
      const outputDiscount = document.querySelector("#discount");
      outputDiscount.innerHTML = `non hai diritto a sconti`;
    }
  }
});


// Button DELETE
reset.addEventListener("click", function () {
  userEl.value = "";
  KmEl.value = "";
  ageEl.value = "standard";
  const outputName = document.querySelector("#user");
  outputName.innerHTML = ``;
  const outputAge = document.querySelector("#categoria");
  outputAge.innerHTML = ``;
  const outputPrice = document.querySelector("#price");
  outputPrice.innerHTML = ``;
  const outputDiscount = document.querySelector("#discount");
  outputDiscount.innerHTML = ``;
});
