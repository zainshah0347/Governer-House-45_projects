function carInfo(manufacturer, modelName, color, year) {
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
        color: color,
        year: year,
    };
    console.log(car);
}
// Call the function with required information and additional options
var car = carInfo("Toyota", "Camry", "Silver", 2022);
// Print the returned object
console.log(car);
