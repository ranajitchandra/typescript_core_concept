var users = []; // array of object type, this array  receives only object type values
// object type array
var details = {
    id: 101,
    name: "Interface details",
    age: 24
};
var details1 = {
    id: 102,
    name: "Interface details1",
    age: 25
};
users.push(details, details1);
// console.log(users);
var usersFn = function (user) {
    // console.log(`id is ${user.id}, name is ${user.name} and age is ${user.age}`);
    console.log(user); // error, because object type doesn't have length property
};
users.forEach(function (user) {
    usersFn(user);
});
