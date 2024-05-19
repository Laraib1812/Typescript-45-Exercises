/*
You just found a bigger dinner table, so now more space is available. Think of three more guests 
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/

let myguest: string[] = ["Babar", "Rizwan", "Shadab", "Shaheen"];
console.log(myguest);

let cannotAttend: string = "Babar";
console.log(cannotAttend + ` cannot attend due to busy schedule`);

let newguest: string = "safeer";
myguest[myguest.indexOf(cannotAttend)]=newguest;
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

for(let i = 0; i < myguest.length; i++){
    console.log(`Dear ${myguest[i]}, you are invited to the dinner party at my house, it will be grateful for me if a person of your calliber attends it.`)
}
