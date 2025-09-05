// function signature-----------------------------

let userInfo : () => void; // function without parameters signature, void is not return anything
let userStatus : () => number; // function with return type signature

// function with parameters signature
let userDetails : (id : number, name : string) => string; 

userInfo = () : void => {
    console.log("User Info void");
}
userInfo();

userStatus = () : number => {
    return 10;
}
userStatus();

userDetails = (id : number, name : string) : string => {
    return (`User id is ${id} and name is ${name}`);
}
console.log(userDetails(100, "kana manikanta"));
