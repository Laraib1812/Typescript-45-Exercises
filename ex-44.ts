/*
Write a function that accepts an array of items a person wants on a sandwich. The function 
should have one parameter that collects as many items as the function call provides, and it should 
print a summary of the sandwich that is being ordered. Call the function three times, using a different 
number of arguments each time.
*/

function sandwichMaker(...item:string[]){
    console.log("\nMaking your sandwich with: \n")

    for(let i=0; i<item.length; i++){
        console.log("\t- " + item[i])
    }

    console.log("\nEnjoy your sandwich...\n")
}

sandwichMaker("bread","butter","cheese");
sandwichMaker("lettuce","chicken","cheese");
sandwichMaker("bread","butter","cheese","chicken","lettuce");