function carInfo(manufacturer: string, modelName: string, color:string, year:2022):void {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName,
        color: color,
        year : year,
    };
    console.log(car);
    
}

// Call the function with required information and additional options
let car = carInfo("Toyota", "Camry","Silver",2022);

// Print the returned object
console.log(car);
