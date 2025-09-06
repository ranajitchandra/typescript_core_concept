// generic
function identity(useID, name) {
    console.log("User id is ".concat(useID, ", name is ").concat(name));
}
identity(101, "Manikanta");
identity(10, "102"); // only one type parameter, second is optional
identity(true, "Kana");
identity({ id: "123" }, { name: "obj" }); // type inference, types are inferred from arguments
var identity2 = function (arg) {
    return arg;
};
console.log(identity2("hello")); // type inference, types are inferred from arguments
console.log(identity2(123)); // type inference, types are inferred from arguments
console.log(identity2(true)); // type inference, types are inferred from arguments
console.log(identity2({ id: "123" })); // type inference, types are inferred from arguments
