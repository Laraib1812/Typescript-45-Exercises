/*
Start with a copy of your program from Exercise 41. Write a function called make_great() that 
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
show_magicians() to see that the list has actually been modified.
*/

let magician_Names : string[] = ["Magician1","Magician2","Magician3","Magician4"];

function show_magicians(magicianNames:string[]){
    magicianNames.forEach(name => console.log(name))
}

function make_great(magicianArray:string[]){
    for(let i=0; i<magicianArray.length; i++){
        magician_Names[i] = "The Great " + magicianArray[i]
    }
}

make_great(magician_Names);
show_magicians(magician_Names);