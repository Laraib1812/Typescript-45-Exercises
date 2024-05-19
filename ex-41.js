/*
Make an array of magician’s names. Pass the array to a function called show_magicians(), which
prints the name of each magician in the array.
*/
/*
let magicianNames : string[] = ["Magician1","Magician2","Magician3","Magician4"];

function show_magicians(){
    for( let i=0; i<magicianNames.length; i++){
        console.log(`${magicianNames[i]}`)
    }
}
show_magicians()
*/
//  -------------------------OR---------------------
function show_magicians(magicianNames) {
    magicianNames.forEach(function (name) { return console.log(name); });
}
var magician_Names = ["Magician1", "Magician2", "Magician3", "Magician4"];
show_magicians(magician_Names);
