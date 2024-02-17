// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var countries = {
    "Pakistan": { capital: "Islamabad", population: 331002651, continent: "South Asia" },
    "China": { capital: "Beijing", population: 1444216107, continent: "Asia" },
    "Brazil": { capital: "Brasília", population: 212559417, continent: "South America" },
    "Russia": { capital: "Moscow", population: 145934462, continent: "Europe/Asia" },
    "India": { capital: "New Delhi", population: 1380004385, continent: "Asia" }
};
// Print the information about each country
console.log("Information about different countries:");
for (var country in countries) {
    console.log("Country: ".concat(country));
    console.log("Capital: ".concat(countries[country].capital));
    console.log("Population: ".concat(countries[country].population));
    console.log("Continent: ".concat(countries[country].continent));
    console.log();
}
