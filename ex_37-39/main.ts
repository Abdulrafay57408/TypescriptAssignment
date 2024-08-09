//Q No 37
console.log("\n **Q No 37**\n");

function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
}

// Large shirt with default message
make_shirt();

// Medium shirt with default message
make_shirt("Medium");

// Small shirt with a custom message
make_shirt("Small", "Keep Calm and Code On");


//Q No 38
console.log("\n **Q No 38**\n");

function describe_city(city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}.`);
}

// City in the default country
describe_city("Karachi");

// Another city in the default country
describe_city("Lahore");

// City in a different country
describe_city("New York", "USA");


//Q No 39
console.log("\n **Q No 39**\n");

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

let location1 = city_country("Lahore", "Pakistan");
let location2 = city_country("New York", "USA");
let location3 = city_country("Tokyo", "Japan");

console.log(location1);
console.log(location2);
console.log(location3);
