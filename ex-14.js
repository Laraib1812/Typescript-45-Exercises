/*
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
includes at least three people you’d like to invite to dinner. Then use your list to print a message to
each person, inviting them to dinner.
*/
// METHOD 1
// I would invite Pak national cricket team players for dinner. Now lets print a message to each of them,
var guest = ["Babar", "Rizwan", "Shadab", "Shaheen"];
var dinnerMessage = " you are invited to the dinner party at my house, it will be grateful for me if a person of your calliber attends it";
console.log(guest[0] + dinnerMessage);
console.log(guest[1] + dinnerMessage);
console.log(guest[2] + dinnerMessage);
console.log(guest[3] + dinnerMessage);
// METHOD 2
guest.map(function (item) { return (console.log("Dear ".concat(item, ", you are invited to the dinner party at my house, it will be grateful for me if a person of your calliber attends it"))); });
