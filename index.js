"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Tuples
let coffeeOrder = ["Cappucino", "Medium"];
coffeeOrder[0] = "s";
console.log(coffeeOrder[0]);
//Enums
var CoffeType;
(function (CoffeType) {
    CoffeType["Espresso"] = "Espresso";
    CoffeType["Latte"] = "Latte";
    CoffeType["Cappucino"] = "Cappucino";
    CoffeType["Americano"] = "Americano";
})(CoffeType || (CoffeType = {}));
let myOrder = CoffeType.Americano;
console.log(myOrder);
//While loop:
let minutesUntilBusArrivess = 5;
while (minutesUntilBusArrivess > 0) {
    console.log(`Bus arrives in ${minutesUntilBusArrivess} minutes`);
    minutesUntilBusArrivess--;
}
//Do While loop:
let minutes = 5;
do {
    console.log("checking for the bus");
    minutes--;
} while (minutes > 0);
//Additional 
let mins = 5;
function checkBusArrival() {
    mins--;
    if (mins != 0) {
        return "Checking for the bus...";
    }
    else {
        return false;
    }
}
do {
    let response = checkBusArrival();
    console.log(response);
} while (mins > 0);
//For loop:
for (let i = 0; i < 5; i++) {
    console.log("Watering Plant", i + 1);
}
//For-In loop
let person = {
    name: "alice", age: 30, city: "Wonderland"
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
//For-Of loop:
let flavors = ["Vanilla", "Chocolate", "Strawberry", "Mint"];
for (let flavor of flavors) {
    console.log(flavors);
}
