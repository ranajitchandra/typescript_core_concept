// build in type: string, number, boolean, null, undefined
var age;
var userName;
var isActive;
age = 10;
userName = "Max";
isActive = false;
function display() {
    console.log("Hello I am display function");
}
// union type
var multiTyoe;
multiTyoe = 20;
multiTyoe = "Twenty";
function combine(userId) {
    console.log("User Id is: ".concat(userId));
}
// array type
var numberArray;
var stringArray;
var multiTyoeArray;
multiTyoeArray = [1, "Two", 3, "Four"];
stringArray = ["Max", "Anna", "Chris"].sort();
numberArray = [1, 2, 3, 4, 5];
// tuple type
var user;
user = [1, "Max"];
user.push("Hello", 2);
// EMUN type is no duplicate value, help to store the constant values
// numeric enum, string enum, heterogenous enum
// numeric enum
var RequestStatus;
(function (RequestStatus) {
    RequestStatus[RequestStatus["PENDING"] = 2] = "PENDING";
    RequestStatus[RequestStatus["APPROVED"] = 3] = "APPROVED";
    RequestStatus[RequestStatus["REJECTED"] = 4] = "REJECTED";
})(RequestStatus || (RequestStatus = {}));
// console.log(RequestStatus.PENDING); 
// string enum
var RequestType;
(function (RequestType) {
    RequestType["CREATE"] = "create";
    RequestType["UPDATE"] = "update";
    RequestType["DELETE"] = "delete";
})(RequestType || (RequestType = {}));
// console.log(RequestType["CREATE"]); 
// heterogenous enum
var MultiRequest;
(function (MultiRequest) {
    MultiRequest[MultiRequest["PENDING"] = 1] = "PENDING";
    MultiRequest["APPROVED"] = "approved";
    MultiRequest[MultiRequest["REJECTED"] = 2] = "REJECTED";
    MultiRequest["HOLD"] = "hold";
})(MultiRequest || (MultiRequest = {}));
// console.log(MultiRequest);
//  any type is not recommended to use it, it will allow to assign any type of value
var randomValue;
randomValue = 10;
randomValue = true;
randomValue = "Max";
randomValue = [];
// object type 
var getData; //array of object type declared
getData = []; // empty array of object type assigned
// userDetails object type with optional property
var userDetails; // isStatus is optional
userDetails = { id: 1, name: "Max" };
var employee;
employee = { id: 1, name: "Anna" };
getData.push(userDetails, employee);
// console.log(getData);
// custom type
var users; //array of object type declared
users = []; // empty array of object type assigned
var user1;
user1 = { id: 1, name: "Max" };
users.push(user1);
var user2 = { id: 2, name: "Anna", isStatus: true };
users.push(user2);
// console.log(users);
