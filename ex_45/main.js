function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var car1 = car_info("Toyota", "Corolla", ["color", "Red"], ["year", 2024]);
var car2 = car_info("Ford", "Mustang", ["color", "Blue"], ["feature", "Sunroof"], ["year", 2023]);
console.log(car1);
console.log(car2);
