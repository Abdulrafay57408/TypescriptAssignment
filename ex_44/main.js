function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nYour sandwich includes the following items:\n");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log("");
}
make_sandwich("Turkey", "Lettuce", "Tomato");
make_sandwich("Ham", "Cheese");
make_sandwich("Chicken", "Avocado", "Bacon", "Pickles", "Onions");
