function car_info(manufacturer: string, model: string, ...options: [string, any][]) {
    const car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let [key, value] of options) {
        car[key] = value;
    }

    return car;
}

let car1 = car_info("Toyota", "Corolla", ["color", "Red"], ["year", 2024]);
let car2 = car_info("Ford", "Mustang", ["color", "Blue"], ["feature", "Sunroof"], ["year", 2023]);

console.log(car1);
console.log(car2);
