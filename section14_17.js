//For Special Assignment Section 14 - 17
//Part 1
//defining variable
const tShirtPrice = 19.99; 
const mugPrice = 10.50;
let customerName = "Max Steel";
let isLoggedIn = true;
let itemCount = 2;

console.log ("***Part 1***")
let totalPrice = tShirtPrice + mugPrice; //calculating total
console.log("Customer:" + " " + customerName); //printing variable in console
console.log("Is logged in:" + " " + isLoggedIn);//printing variable in console
console.log("Number of items:" + " " + itemCount); //printing variable in console
console.log (totalPrice) //printing variable in console

customerName = "Optimus"; //changing value of the variable
isLoggedIn = false; //changing value of the variable
console.log("Customer:" + " " + customerName); //printing variable in console
console.log("Is logged in:" + " " + isLoggedIn); //printing variable in console

//Part 2
console.log("***Part 2***")
const item1 = "Crsytal Key"
const item2 = "Golden Scroll"
const item3 = "Elixir of Strength"
const redemptionPrefix = "CODE-"
const randomNumber = Math.floor(Math.random() *3)
const randomDigit = Math.floor(Math.random() *10000)
let redemptionCode = redemptionPrefix + randomDigit

if (randomNumber === 0) {console.log( `Congratulations! You have received a ${item1}. The length of your item name is ${item1.length}. Use this code to redeem your prize: ${redemptionCode}`)}

else if (randomNumber === 1) {console.log( `Congratulations! You have received a ${item2}. The length of your item name is ${item2.length}. Use this code to redeem your prize: ${redemptionCode}`)}

else if (randomNumber === 2) {console.log( `Congratulations! You have received a ${item3}. The length of your item name is ${item3.length}. Use this code to redeem your prize: ${redemptionCode}`)}
