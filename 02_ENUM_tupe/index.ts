
// ------------------------
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


// --------------------------------------------------
//  any type is not recommended to use it, 
// it will allow to assign any type of value

let randomValue: any;
randomValue = 10;
randomValue = true;
randomValue = "Max";
randomValue = [];

