

//Tuples
let coffeeOrder: [string, string] = ["Cappucino", "Medium"];
coffeeOrder[0] = "s";
console.log(coffeeOrder[0]);

//Enums

enum CoffeType {
    Espresso = "Espresso",
    Latte = "Latte",
    Cappucino = "Cappucino",
    Americano = "Americano"
}
let myOrder: CoffeType = CoffeType.Americano;
console.log(myOrder);

//Const enums

const enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
function movePlayer(direction: Direction) {
    switch (direction) {
        case Direction.Up:
            console.log("Moving up");
            break;
        case Direction.Down:
            console.log("Moving down");
            break;
        case Direction.Left:
            console.log("Moving left");
            break;
        case Direction.Right:
            console.log("Moving right");
            break;
        default:
            console.log("Unknown direction");
            break;
    }
}

movePlayer(Direction.Right);


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
function checkBusArrival () {
    mins--;
    if (mins != 0) {
        return "Checking for the bus...";
    } else { return false}
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

let person: any = {
    name: "alice", age: 30, city: "Wonderland"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
    
}

//For-Of loop:

let flavors = ["Vanilla", "Chocolate", "Strawberry", "Mint"];

for (let flavor of flavors) {
    console.log(flavor);
    
}