
// narrowing
function example(x: string | number) {
  if (typeof x === "string") {  // narrowing to string 
    console.log(x.toUpperCase()); // now x is string, so we can use string methods
  } else {
    console.log(x.toFixed(2)); // now x is number, so we can use number methods
  }
}

example("hello");
example(12.34567);

function printLength(obj: string | string[] | null) {
    if (obj) { // narrowing to non-null 
    console.log(`Length is ${obj.length}`);
    } else if (Array.isArray(obj)) { // narrowing to array
    console.log(`Array length is ${obj.length}`); // now obj is array, so we can use array methods
  } else {
    console.log(`String length is ${obj?.length}`); 
  }
}

printLength("hello");
printLength(["a", "b", "c"]);
printLength(null);

let firstName : string;
let lastName : typeof firstName; // type of firstName is string
lastName = "Manikanta"; // valid
// lastName = 123; // invalid, because lastName is string type
console.log(lastName);

