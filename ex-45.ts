/*
Write a function that stores information about a car in an Object. The function should always 
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
arguments. Call the function with the required information and two other name-value pairs, such as 
a color or an optional feature. Print the Object that’s returned to make sure all the information was
stored correctly.
*/

function carInfo(manufacturer, modelName, ...options){
    const car = {
        manufacturer : manufacturer,
        modelName : modelName,
    };
    
    options.forEach(options => {
        let [key, value] = options.split(":");
        car[key.trim()]= value.trim();
    });
    return car;
}

let myCar = carInfo("toyota","corolla","color:black","sunroof:true","year:2023");

console.log(myCar);