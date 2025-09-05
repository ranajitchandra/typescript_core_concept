// build in type: string, number, boolean, null, undefined

let age: number;
let userName: string;
let isActive: boolean;

age = 10;
userName = "Max";
isActive = false

function display(): void {
    console.log("Hello I am display function");
}
display();



// -----------------------------
// union type

let multiTyoe: number | string;
multiTyoe = 20;
multiTyoe = "Twenty";

function combine(userId: number | string) {
    console.log(`User Id is: ${userId}`);
}


combine(1);
// ------------------------
// array type

let numberArray: number[];
let stringArray: string[];
let multiTyoeArray: (number | string)[];

multiTyoeArray = [1, "Two", 3, "Four"];
stringArray = ["Max", "Anna", "Chris"].sort();
numberArray = [1, 2, 3, 4, 5];


// ------------------------
// tuple type

let user: [number, string];
user = [1, "Max"];
user.push("Hello", 2);
