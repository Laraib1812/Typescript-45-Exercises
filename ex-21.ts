/*
They think of something you could store in a TypeScript Object. Write a program that creates 
Objects containing these items.
*/

interface item{
name : string
price : number
}

const book: item ={
name : "Maths",
price : 240
}
const fruit: item = {
    name : "apples",
    price : 100
}
console.log(`book name : ${book.name} \n price : ${book.price}`);
console.log(`fruit name : ${fruit.name} \n price : ${fruit.price}`);

