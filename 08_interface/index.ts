
// interface declaration, 
// it is used to define the structure of an object
// like users object, array and userFn it should have id, name and age properties
// we can use this interface as a type
interface IUser {
    id: number,
    name: string,
    age: number
}


let users : IUser [] = [] // array of object type, this array  receives only object type values

// object type array
let details: IUser = {
    id: 101,
    name: "Interface details",
    age: 24
}

let details1: {
    id: number,
    name: string,
    age: number
} = {
    id: 102,
    name: "Interface details1",
    age: 25
}
users.push(details, details1);
// console.log(users);


let usersFn = (user : IUser) =>{
    // console.log(`id is ${user.id}, name is ${user.name} and age is ${user.age}`);
    console.log(user); // error, because object type doesn't have length property
    
}
users.forEach((user) => {
    usersFn(user);
})