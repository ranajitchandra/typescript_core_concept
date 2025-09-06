// narrowing
function example(x) {
    if (typeof x === "string") { // narrowing to string 
        console.log(x.toUpperCase()); // now x is string, so we can use string methods
    }
    else {
        console.log(x.toFixed(2)); // now x is number, so we can use number methods
    }
}
example("hello");
example(12.34567);
function printLength(obj) {
    if (obj) { // narrowing to non-null 
        console.log("Length is ".concat(obj.length));
    }
    else if (Array.isArray(obj)) { // narrowing to array
        console.log("Array length is ".concat(obj.length)); // now obj is array, so we can use array methods
    }
    else {
        console.log("String length is ".concat(obj === null || obj === void 0 ? void 0 : obj.length));
    }
}
