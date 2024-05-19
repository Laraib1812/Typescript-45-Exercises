/* Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
 and titlecase. */


// declairing variable 
const personName: string = "Laraib";

// for lower-case
console.log(personName.toLowerCase());

// for Upper-case 
console.log(personName.toUpperCase());

// for title-case
let firstletter: string = personName.charAt(0).toUpperCase();
let restofletters: string = personName.slice(1).toLowerCase();
let titlecase = firstletter + restofletters;
console.log(titlecase);