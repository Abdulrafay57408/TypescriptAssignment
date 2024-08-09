// Q no 24
console.log("\n Q No 24 \n")

let country :string = "Pakistan"
let country2 :string = "India"

// Tests for equality and inequality with string
console.log("Tests for equality and inequality with string");
console.log(country == "Pakistan"); //true
console.log(country == "pakistan" ); //false
console.log("");

console.log(country != "pakistan"); //true
console.log(country != "Pakistan" ); //false
console.log("");

// Tests using the lower case function
console.log("Tests using the lower case function");
console.log(country.toLowerCase == "Pakistan".toLowerCase); //true
console.log(country.toLowerCase != "Pakistan".toLowerCase); //false
console.log("");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log(10 == 10); //true
console.log(10 != 10); //false
console.log(10 < 10); //false
console.log(10 > 10); //false
console.log(10 <= 10); //true
console.log(10 >= 10); //true
console.log("");

//  Tests using "and" and "or" operators
console.log('Tests using "and" and "or" operators');
console.log(country == "Pakistan" && country2 != "Pakistan"); //true
console.log(country == "Pakistan" && country2 == "Pakistan"); //false
console.log(country == "Pakistan" || country2 != "India"); //true
console.log(country != "Pakistan" || country2 == "Pakistan"); //false
console.log("");

//  Test whether an item is in an array
console.log('Test whether an item is in an array');
let fruit :string[]= ["melon","mango","apple", "banana", "cherry"];
console.log(fruit.includes("apple")); // True
console.log(fruit.includes("stawberry")); // false
console.log("");

//  Test whether an item is not in an array
console.log('Test whether an item is not in an array');
console.log(!fruit.includes("stawberry")); // True
console.log(!fruit.includes("melon")); // false
console.log("");