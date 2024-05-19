/*
You just found out that your new dinner table won’t arrive in time for the dinner, and you have
space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you
pop a name from your list, print a message to that person letting them know you’re sorry you can’t
invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program
*/
var myguest = ["Babar", "Rizwan", "Shadab", "Shaheen"];
console.log(myguest);
var cannotAttend = "Babar";
console.log(cannotAttend + " cannot attend due to busy schedule");
var newguest = "safeer";
myguest[myguest.indexOf(cannotAttend)] = newguest;
console.log(myguest);
console.log("Hey everyone! we just found a bigger dinner table which is permitting us to add 3 more guests to our list");
// adding people
// adding at the beginning
myguest.unshift("Imad Waseem");
// adding in middle
myguest.splice(3, 0, "Naseem Shah");
// adding at last
myguest.push("Fakhar Zaman");
console.log(myguest);
for (var i = 0; i < myguest.length; i++) {
    console.log("Dear ".concat(myguest[i], ", you are invited to the dinner party at my house, it will be grateful for me if a person of your calliber attends it."));
}
console.log("Hey everyone! its really sad to inform you that the bigger dinner table will not be available, and we will not be able to held the dinner party with 8 guests, only two of you can attend it.");
// removing people
// Using the pop() method 
var remItem = myguest.pop();
console.log("Dear ".concat(remItem, ", we are really sorry that we can't invite you for this party"));
console.log("Guests list now : ".concat(myguest));
remItem = myguest.pop();
console.log("Dear ".concat(remItem, ", we are really sorry that we can't invite you for this party"));
console.log("Guests list now : ".concat(myguest));
remItem = myguest.pop();
console.log("Dear ".concat(remItem, ", we are really sorry that we can't invite you for this party"));
console.log("Guests list now : ".concat(myguest));
remItem = myguest.pop();
console.log("Dear ".concat(remItem, ", we are really sorry that we can't invite you for this party"));
console.log("Guests list now : ".concat(myguest));
remItem = myguest.pop();
console.log("Dear ".concat(remItem, ", we are really sorry that we can't invite you for this party"));
console.log("Guests list now : ".concat(myguest));
for (var i = 0; i < myguest.length; i++) {
    console.log("Dear ".concat(myguest[i], ", we are glad to inform you that you are still invited to the party."));
}
// Making an empty list
remItem = myguest.pop();
remItem = myguest.pop();
console.log("Guest list now : ".concat(myguest));
