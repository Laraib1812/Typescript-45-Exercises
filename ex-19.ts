/*
Working with one of the programs from Exercises 14 through 18, print a message indicating 
the number of people you are inviting to dinner.
*/

let myguest: string[] = ["Babar", "Rizwan", "Shadab", "Shaheen"];
// console.log(myguest);

let cannotAttend: string = "Babar";
// console.log(cannotAttend + ` cannot attend due to busy schedule`);

let newguest: string = "safeer";
myguest[myguest.indexOf(cannotAttend)]=newguest;
// console.log(myguest);

// console.log("Hey everyone! we just found a bigger dinner table which is permitting us to add 3 more guests to our list");

                // adding people

 // adding at the beginning
myguest.unshift("Imad Waseem");

// adding in middle
myguest.splice(3, 0, "Naseem Shah");

// adding at last
myguest.push("Fakhar Zaman");
// console.log(myguest);

for(let i = 0; i < myguest.length; i++){
    // console.log(`Dear ${myguest[i]}, you are invited to the dinner party at my house, it will be grateful for me if a person of your calliber attends it.`)
}

// console.log("Hey everyone! its really sad to inform you that the bigger dinner table will not be available, and we will not be able to held the dinner party with 8 guests, only two of you can attend it.");

            // removing people

// Using the pop() method 
let remItem = myguest.pop();
// console.log(`Dear ${remItem}, we are really sorry that we can't invite you for this party`);
// console.log(`Guests list now : ${myguest}`);
 remItem = myguest.pop();
// console.log(`Dear ${remItem}, we are really sorry that we can't invite you for this party`);
// console.log(`Guests list now : ${myguest}`);
remItem = myguest.pop();
// console.log(`Dear ${remItem}, we are really sorry that we can't invite you for this party`);
// console.log(`Guests list now : ${myguest}`);
remItem = myguest.pop();
// console.log(`Dear ${remItem}, we are really sorry that we can't invite you for this party`);
// console.log(`Guests list now : ${myguest}`);/
remItem = myguest.pop();
// console.log(`Dear ${remItem}, we are really sorry that we can't invite you for this party`);
// console.log(`Guests list now : ${myguest}`);

for(let i = 0; i < myguest.length; i++){
    // console.log(`Dear ${myguest[i]}, we are glad to inform you that you are still invited to the party.`)
}

// Making an empty list
remItem = myguest.pop();
remItem = myguest.pop();
// console.log(`Guest list now : ${myguest}`);

// for length 
console.log(`${myguest.length}`);
