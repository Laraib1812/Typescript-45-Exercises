/*
Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list 
that stores several examples. Use your list to print a series of statements about these items, such as 
“I would like to own a Honda motorcycle.”
*/

        // METHOD 1
 let transport: string[] = ["bikes", "cars", "buses"];
//  let statement: string = "i would like to travel through ";

//  console.log(statement + transport[0]);
//  console.log(statement + transport[1]);
//  console.log(statement + transport[2]);
        // METHOD 2
transport.map((item)=>(
    console.log(`i would like to travel through ${item}`)
))
 