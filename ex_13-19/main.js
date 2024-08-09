//Q 13
console.log("\n Q NO 13 \n");
var transportations = ["bike", "car", "honda bike", "civic"];
for (var i in transportations) {
    console.log("I would like to own a ".concat(transportations[i]));
}
console.log("");
// Q 14
console.log("\n Q NO 14 \n");
var guests = ["Ali", "Aslam", "Laraib", "Laiba"];
for (var j in guests) {
    console.log("Hello ".concat(guests[j], ", I want to invite you at dinner."));
}
console.log("");
//Q 15
console.log("\n Q NO 15 \n");
console.log("\"".concat(guests[1], " is not comming.\""));
guests[1] = "Imaan";
for (var j in guests) {
    console.log("Hello ".concat(guests[j], ", I want to invite you at dinner."));
}
console.log("");
//Q 16
console.log("\n Q NO 16\n");
console.log('"I found a bigger dinner table."');
guests.unshift("Rafiya");
guests.push("Salman");
guests.splice(3, 0, "Rameez");
for (var j in guests) {
    console.log("Hello ".concat(guests[j], ", I want to invite you at dinner."));
}
console.log("");
//Q 17
console.log("\n Q NO 17 \n");
console.log('"I can invite only two people for dinner."');
var remove = guests.pop();
console.log("Sorry ".concat(remove, ", I can't invite you to dinner."));
remove = guests.pop();
console.log("Sorry ".concat(remove, ", I can't invite you to dinner."));
remove = guests.pop();
console.log("Sorry ".concat(remove, ", I can't invite you to dinner."));
remove = guests.pop();
console.log("Sorry ".concat(remove, ", I can't invite you to dinner."));
remove = guests.pop();
console.log("Sorry ".concat(remove, ", I can't invite you to dinner."));
console.log("");
for (var j in guests) {
    console.log("Hello ".concat(guests[j], ", You are still invited at dinner."));
}
guests.pop();
guests.pop();
console.log("Empty List:");
console.log(guests);
console.log("");
//Q 18
console.log("\n Q NO 18 \n");
var desirePlaces = ["Naran", "Kaghan", "Islamabad", "Quetta", "Muree"];
console.log("Original Order Array : ".concat(desirePlaces, "\n"));
console.log("Alphabetical Order Array : ".concat(desirePlaces.slice().sort(), "\n"));
console.log("Still Original Order Array  : ".concat(desirePlaces, "\n"));
console.log("Reverse Alphabetic Order Array : ".concat(desirePlaces.slice().sort().reverse(), "\n"));
console.log("Still Original Order Array  : ".concat(desirePlaces, "\n"));
desirePlaces.reverse();
console.log("Reverse Order Array : ".concat(desirePlaces, "\n"));
desirePlaces.reverse();
console.log("Again Order Array : ".concat(desirePlaces, "\n"));
desirePlaces.sort();
console.log("Alphabetical Order original Array : ".concat(desirePlaces.slice().sort(), "\n"));
desirePlaces.sort().reverse();
console.log("Reverse Alphabetical Order original Array : ".concat(desirePlaces.slice().sort(), "\n"));
// Q no 19
console.log("\n Q NO 19 \n");
guests = ["Ali", "Aslam", "Laraib", "Laiba"];
var guestLength = guests.length;
console.log("Total ".concat(guestLength, " guests are invited."));
// Q no 20
console.log("\n Q NO 20 \n");
var countries = ["Pakistan", "India", "USA", "Japan", "Canada"];
for (var i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
