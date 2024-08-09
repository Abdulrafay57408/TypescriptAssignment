//Q 13
console.log(`\n Q NO 13 \n`)
let transportations = ["bike","car","honda bike", "civic"]

for (let i in transportations){
    console.log(`I would like to own a ${transportations[i]}`)
}
console.log("")

// Q 14
console.log(`\n Q NO 14 \n`)
let guests = ["Ali","Aslam","Laraib", "Laiba"]

for (let j in guests){
    console.log(`Hello ${guests[j]}, I want to invite you at dinner.`)
}

console.log("")

//Q 15
console.log(`\n Q NO 15 \n`)
console.log(`"${guests[1]} is not comming."`)

guests[1] = "Imaan"

for (let j in guests){
    console.log(`Hello ${guests[j]}, I want to invite you at dinner.`)
}
console.log("")

//Q 16
console.log(`\n Q NO 16\n`)
console.log('"I found a bigger dinner table."')
guests.unshift("Rafiya")
guests.push("Salman")
guests.splice(3,0,"Rameez")

for (let j in guests){
    
    console.log(`Hello ${guests[j]}, I want to invite you at dinner.`)

}
console.log("")

//Q 17
console.log(`\n Q NO 17 \n`)
console.log('"I can invite only two people for dinner."')
let remove = guests.pop()
console.log(`Sorry ${remove}, I can't invite you to dinner.`)
remove = guests.pop()
console.log(`Sorry ${remove}, I can't invite you to dinner.`)
remove = guests.pop()
console.log(`Sorry ${remove}, I can't invite you to dinner.`)
remove = guests.pop()
console.log(`Sorry ${remove}, I can't invite you to dinner.`)
remove = guests.pop()
console.log(`Sorry ${remove}, I can't invite you to dinner.`)
console.log("")
for (let j in guests){
    console.log(`Hello ${guests[j]}, You are still invited at dinner.`)
}
guests.pop()
guests.pop()
console.log("Empty List:")
console.log(guests)
console.log("")

//Q 18
console.log(`\n Q NO 18 \n`)
let desirePlaces = ["Naran","Kaghan","Islamabad","Quetta","Muree"]

console.log(`Original Order Array : ${desirePlaces}\n`)

console.log(`Alphabetical Order Array : ${desirePlaces.slice().sort()}\n`)

console.log(`Still Original Order Array  : ${desirePlaces}\n`)

console.log(`Reverse Alphabetic Order Array : ${desirePlaces.slice().sort().reverse()}\n`)

console.log(`Still Original Order Array  : ${desirePlaces}\n`)

desirePlaces.reverse()
console.log(`Reverse Order Array : ${desirePlaces}\n`)

desirePlaces.reverse()
console.log(`Again Order Array : ${desirePlaces}\n`)

desirePlaces.sort()
console.log(`Alphabetical Order original Array : ${desirePlaces.slice().sort()}\n`)

desirePlaces.sort().reverse()
console.log(`Reverse Alphabetical Order original Array : ${desirePlaces.slice().sort()}\n`)


// Q no 19
console.log(`\n Q NO 19 \n`)
guests = ["Ali","Aslam","Laraib", "Laiba"]
var guestLength: number =guests.length
console.log(`Total ${guestLength} guests are invited.`)

