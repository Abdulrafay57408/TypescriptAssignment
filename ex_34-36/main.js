//Q No 34
console.log("\n **Q No 34**\n");
var pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " pizza."));
}
console.log("I really love pizza!");
//Q No 35
console.log("\n **Q No 35**\n");
var animals = ["Dog", "Cat", "Rabbit"];
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
//Q No 36
console.log("\n **Q No 36**\n");
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\"."));
}
make_shirt("Medium", "Code is Life!");
