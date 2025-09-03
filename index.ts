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

// union type

let multiTyoe: number | string;
multiTyoe = 20;
multiTyoe = "Twenty";

function combine( userId: number | string ){
    console.log(`User Id is: ${userId}`);
}

// array type

let numberArray: number[];
let stringArray: string[];
let multiTyoeArray: ( number | string)[];

multiTyoeArray = [1, "Two", 3, "Four"];
stringArray = ["Max", "Anna", "Chris"].sort();
numberArray = [1,2,3,4,5];


// tuple type

let user: [number, string];
user = [1, "Max"];
user.push("Hello", 2);



// EMUN type is no duplicate value, help to store the constant values
// numeric enum, string enum, heterogenous enum

// numeric enum
enum RequestStatus {
    PENDING = 2, // it will start from 1 index
    APPROVED,    // it will be 2
    REJECTED,     // it will be 3
}
// console.log(RequestStatus.PENDING); 

// string enum
enum RequestType {
    CREATE = "create",
    UPDATE = "update",
    DELETE = "delete"
}
// console.log(RequestType["CREATE"]); 

// heterogenous enum

enum MultiRequest {
    PENDING = 1,
    APPROVED = "approved",
    REJECTED = 2,
    HOLD = "hold"
}
// console.log(MultiRequest);


//  any type is not recommended to use it, it will allow to assign any type of value

let randomValue: any;
randomValue = 10;
randomValue = true;
randomValue = "Max";
randomValue = [];


// object type 
let getData: object[]; //array of object type declared
getData = [] // empty array of object type assigned

// userDetails object type with optional property
let userDetails: { id: number, name: string, isStatus?: boolean }; // isStatus is optional
userDetails = { id: 1, name: "Max" };

let employee: object;
employee = { id: 1, name: "Anna" };

getData.push(userDetails, employee)

// console.log(getData);



// custom type

let users: object[]; //array of object type declared
users = [] // empty array of object type assigned

type userType = { id: number, name: string, isStatus?: boolean }; // custom type created

let user1: userType;
user1 = { id: 1, name: "Max" }
users.push(user1);

let user2: userType = { id: 2, name: "Anna", isStatus: true };
users.push(user2);
// console.log(users);


