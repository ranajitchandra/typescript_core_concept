"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.isStudent = exports.studentAge = exports.studentName = void 0;
exports.studentName = "Ranajit";
exports.studentAge = 30;
exports.isStudent = true;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.userName = name;
        this.userAge = age;
    }
    Person.prototype.display = function () {
        console.log("name is ".concat(this.userName, ", age is ").concat(this.userAge));
    };
    return Person;
}());
exports.Person = Person;
