/*
Descrizione:Il programma dovrà chiedere all'utente:
 - Numero chilometri da percorrere
 - Età passeggero 

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio:
 - Prezzo dipende dai chilometri (0.21 € al km)
 - Sconto del 20% per i minorenni
 - Sconto del 40% per gli over 65 . 

L'output del prezzo finale va stampata in pagina:
 - Deve essere leggibile da un essere umano (massimo due cifre decimali, per indicare centesimi sul prezzo).
*/

/* 
 Tools
 Prompt
 Const/Let
 if else
 document
 getElementById
 innerHTML
 back tick
 console.log per verificare i risultati intermedi
*/

// Richiedere chilometri da percorrere
const user_km = Number(prompt("Quanti chilometri deve percorrere?"));
console.log("Chilometri utente: ",user_km);

// Richiedere età passeggero
const user_age = Number(prompt("Qual è la sua età?"))
console.log("Età utente: ",user_age);

const priceForKm = 0.21;

// Calcolo prezzo biglietto
let ticketPrice = user_km * priceForKm;
let discount = 0;
console.log("Prezzo biglietto chilometrico: ",ticketPrice," €");


// Calcolo sconto
    // Se minorenne 20%
    // Se over 65 40%

if (user_age < 18)
{
    discount = (ticketPrice * 20.)/100.;
    console.log("Discount minorenni: ",discount);
}
else if (user_age > 65)
{
    discount = (ticketPrice * 40.)/100.;
    console.log("Discount over 60: ",discount);
}

// Calcolo prezzo finale
ticketPrice = ticketPrice - discount;
console.log("Prezzo finale: ",ticketPrice," €")

// Formattazione del numero con 2 cifre decimali
let ticketPriceFormatted = ticketPrice.toFixed(2);

// Pubblicazione in pagina
document.getElementById("ticketPrice").innerHTML=`Prezzo del biglietto: ${ticketPriceFormatted} €`
