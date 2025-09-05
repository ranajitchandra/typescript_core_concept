// custom type----------------

// custom type created
type userType = { id: number, name: string, isStatus?: boolean }; 

let users: userType[]; //array of object type declared
users = [] // empty array of object type assigned

let user1: userType;
user1 = { id: 1, name: "Max" }
users.push(user1);

let user2: userType = { id: 2, name: "Anna", isStatus: true };
users.push(user2);
console.log(users);

// custom type with union type
type RequestMethod = "GET" | "POST" | "PUT" | "DELETE"; 
let requestMethod: RequestMethod;
requestMethod = "GET";
// requestMethod = "PATCH"; // it will throw error

function sendRequest(method: RequestMethod) {
    if (method === "PUT") {
        console.log("Creating new record");
    } else {
        console.log(`Request method is not matching`);
    }
}
sendRequest('PUT');

