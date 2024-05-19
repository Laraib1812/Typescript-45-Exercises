/*
You don’t have to limit the number of tests you create to 10. If you want to try more 
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array
*/

// Test for equalities and in-equalities with string:
console.log("Test for equality: ", "Apple" === "Apple");
console.log("Test for In-equality: ", ("Apple" as string) != "Mango");

// Test using lower case function:
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");

// Numerical tests involving equality and in-equality:
console.log("Equality test: ", 6 === 6);
console.log("Greater than test: ", 56 > 40);
console.log("Less than test: ", 34 < 89);
console.log("Greater than or equal to test: ", 78 >= 69);
console.log("Less than or equal to test: ", 78 <= 98);

// Test using AND and OR operator:
console.log("AND operator test: ", 92 === 92 && 987 > 34);
console.log("OR operator test: ", (98 as number) === 97 || 98 === 98 );

// Test whether an item is in an array or not:
const fridge : string[] = [`bottles`, `fruits`, `vegetables`, `icecream`];
console.log("Test if icecream is in the fridge: ", fridge.includes("icecream"));
console.log("Test if juice is not in the fridge: ", !fridge.includes("juice"));

