const age = 15
const isStudent = true
const showtimeHour = 15
let ticketPrice

console.log (" ")
console.log ("***Part 3***");

if (age >=65) {ticketPrice = 8.50 }
else if (age <13) {ticketPrice = 10.00}
else if ( showtimeHour < 17 && age >= 13) {ticketPrice = 11.00}
else if (isStudent === true) {ticketPrice = 12.50}
else if (!isStudent) {console.log ("If you are a student, you get a discount")}
else ticketPrice = 15.00

console.log ( `You ticket price is: $${ticketPrice}`)

console.log(" ")
console.log("***Part 4***")

let shoppingList = ['milk', 'bread', 'eggs']

shoppingList.push ('cheese')

shoppingList.unshift('fruit')
shoppingList.pop()

shoppingList.splice(2,1)

const pantryItems = ['flour', 'sugar']

combinedList = shoppingList.concat(pantryItems)
console.log(shoppingList)
console.log(combinedList)