// richiesta numero chilometri
var richiestaKm = prompt("quanti km");
console.log("quanti km: ", richiestaKm);

// richiesta età passeggero
var richiestaEta = prompt("età");
console.log("età: ", richiestaEta);

// numero km
// var numeroKm = Math.floor(0.21 * 100) + 1;
// console.log("numero km: ", numeroKm);


// condizioni età
if (richiestaEta <= 17) {
  // sconto 20%
  console.log("minorenne!");
} else if (richiestaEta >= 66) {
  // sconto 40%
  console.log("over 65!");
} else {
  console.log("nessuno sconto");
}

// prezzo totale del viaggio
