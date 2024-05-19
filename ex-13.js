/*
Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list
that stores several examples. Use your list to print a series of statements about these items, such as
“I would like to own a Honda motorcycle.”
*/
// METHOD 1
var transport = ["bikes", "cars", "buses"];
//  let statement: string = "i would like to travel through ";
//  console.log(statement + transport[0]);
//  console.log(statement + transport[1]);
//  console.log(statement + transport[2]);
// METHOD 2
transport.map(function (item) { return (console.log("i would like to travel through ".concat(item))); });
