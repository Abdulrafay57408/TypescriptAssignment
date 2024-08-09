var names = ["Rafay", "Ali", "Hassan", "Salman"];
for (var i in names) {
    console.log(names[i]);
}
console.log("");
for (var i in names) {
    console.log("Good Morning ".concat(names[i], ", How are you?"));
}
