/*
Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and
then use a for loop to print the name of each pizza.
• Modify your loop to print a sentence using the name of the pizza instead of printing just the name of
the pizza. For each pizza you should have one line of output containing a simple statement like I like
pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The
output should consist of three or more lines about the kinds of pizza, you like and then an additional
sentence, such as I really love pizza!
*/
var myFavPizza = ["Chicken Tikka", "Fajita", "Malai Cheese"];
for (var _i = 0, myFavPizza_1 = myFavPizza; _i < myFavPizza_1.length; _i++) {
    var favPizza = myFavPizza_1[_i];
    console.log("I like ".concat(favPizza, " pizza."));
}
console.log("Pizza is love");
