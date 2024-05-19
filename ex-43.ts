/*
Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
of magicians’ names. Because the original array will be unchanged, return the new array and store it 
in a separate array. Call show_magicians() with each array to show that you have one array of the 
original names and one array with the Great added to each magician’s name.
*/

let magician_Names : string[] = ["Magician1","Magician2","Magician3","Magician4"];

function copyOfArr (array:string[]){
    return [...array]
}

function show_magicians(magicianNames:string[]){
    magicianNames.forEach(name => console.log(name))
}

function make_great(magicianArray:string[]){
    for(let i=0; i<magicianArray.length; i++){
        magicianArray[i] = "The Great " + magicianArray[i]
    }
}

let copyArray :string[] = copyOfArr(magician_Names)

make_great(copyArray);

console.log(`\nThis is my original array: `)
show_magicians(magician_Names);

console.log(`\nThis is my modified array: `)
show_magicians(copyArray)


