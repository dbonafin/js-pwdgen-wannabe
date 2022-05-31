// 1 - DATA COLLECT
const userFirstName = prompt("Scrivi il tuo nome");
const userLastName = prompt("Scrivi il tuo cognome");
const userFavColour = prompt("Scrivi il tuo colore preferito");

// 2 - LOGIC PROCESS OF THE RESULT
// construction of the password result
const pwdResult = userFirstName + userLastName + userFavColour + 21;
// construction of the final output 
const userMessage = `La tua password è ${pwdResult}`;

// 3 - OUTPUT RESULT
document.getElementById ("password-result").innerHTML = userMessage;