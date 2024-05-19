/*
You just heard that one of your guests can’t make the dinner, so you need to send out a new 
set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating 
the name of the guest who can’t make it
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
you are inviting.
• Print a second set of invitation messages, one for each person who is still
in your list.
*/

let guest: string[] = ["Babar", "Rizwan", "Shadab", "Shaheen"];

let canNotAttend: string = "Babar";
console.log(canNotAttend + ` cannot attend due to busy schedule`);

let newGuest: string = "safeer";
guest[guest.indexOf(canNotAttend)]=newGuest
console.log(guest)

guest.map((item)=>(
    console.log(`Dear ${item}, you are invited to the dinner party at my house, it will be grateful for me if a person of your calliber attends it`)
))