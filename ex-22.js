/*
If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error. Make sure you correct the error
before closing the program.
*/
// commiting the error
var transport = ["car", "bikes", "rikshaw", "taxi"];
console.log(transport[4]);
// solving the error (by adding one more value in array to reach the given index)
transport.push("bus");
console.log(transport[4]);
var classDay = "sunday";
switch (classDay) {
    case "monday":
        console.log("roz khao anday");
        break;
}
