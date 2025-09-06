
// generic

function identity<T, Y>(useID: T, name?: Y) {
    console.log(`User id is ${useID}, name is ${name}`);
}

identity<number, string>(101, "Manikanta");
identity(10, "102"); // only one type parameter, second is optional
identity<boolean, string>(true, "Kana");
identity( {id : "123"}, { name : "obj" } ); // type inference, types are inferred from arguments


const identity2 = <T, Y>(arg: T): T => {
    return arg;
} 
console.log(identity2<string, number>("hello")); // type inference, types are inferred from arguments
console.log(identity2(123)); // type inference, types are inferred from arguments
console.log(identity2<boolean, string>(true)); // type inference, types are inferred from arguments
console.log(identity2( {id : "123"} )); // type inference, types are inferred from arguments