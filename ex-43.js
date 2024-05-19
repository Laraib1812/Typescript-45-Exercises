/*
Start with your work from Exercise 40. Call the function make_great() with a copy of the array
of magicians’ names. Because the original array will be unchanged, return the new array and store it
in a separate array. Call show_magicians() with each array to show that you have one array of the
original names and one array with the Great added to each magician’s name.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician_Names = ["Magician1", "Magician2", "Magician3", "Magician4"];
function copyOfArr(array) {
    return __spreadArray([], array, true);
}
function show_magicians(magicianNames) {
    magicianNames.forEach(function (name) { return console.log(name); });
}
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The Great " + magicianArray[i];
    }
}
var copyArray = copyOfArr(magician_Names);
make_great(copyArray);
console.log("\nThis is my original array: ");
show_magicians(magician_Names);
console.log("\nThis is my modified array: ");
show_magicians(copyArray);
