// richiesta numero chilometri
var richiestaKm = prompt("quanti km");
console.log("quanti km: ", richiestaKm);

// richiesta età passeggero
var richiestaEta = prompt("età");
console.log("età: ", richiestaEta);

// prezzo biglietto
var price = 0.21;
console.log("prezzo: ", 0.21 * richiestaKm);

// sconto minorenne
var scontoMinorenne = 20 * richiestaKm / 100;

// sconto over65
var scontoOver65 = 40 * richiestaKm / 100;

// condizioni età
if (richiestaEta <= 17) {
  // sconto 20%
  console.log("minorenne!", scontoMinorenne);
} else if (richiestaEta >= 66) {
  // sconto 40%
  console.log("over 65!", scontoOver65);
} else {
  console.log("nessuno sconto");
}


// prezzo totale del viaggio
