/* Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
 and titlecase. */
// declairing variable 
var personName = "Laraib";
// for lower-case
console.log(personName.toLowerCase());
// for Upper-case 
console.log(personName.toUpperCase());
// for title-case
var firstletter = personName.charAt(0).toUpperCase();
var restofletters = personName.slice(1).toLowerCase();
var titlecase = firstletter + restofletters;
console.log(titlecase);
