/*
Write a function called city_country() that takes in the name of a city and its country. The
function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least
three city-country pairs, and print the value that’s returned.
*/
function city_country(cityName, countryName) {
    return "".concat(cityName, ",").concat(countryName);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Berlin", "Germany"));
console.log(city_country("Melbourne", "Australia"));
