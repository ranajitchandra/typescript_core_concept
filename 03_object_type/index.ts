
// object type

let getData: object[]; //array of object type declared
getData = [] // empty array of object type assigned

// userDetails object type with optional property
let userDetails: { id: number, name: string, isStatus?: boolean }; // isStatus is optional
userDetails = { id: 1, name: "Max" };

let employee: object;
employee = { id: 1, name: "Anna" };

getData.push(userDetails, employee)

console.log(getData);

