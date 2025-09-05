"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// module export and import
var student_module_js_1 = require("./student_module.js");
var student_module_js_2 = require("./student_module.js");
var std = require("./student_module.js");
function displayStudentStatus() {
    if (student_module_js_2.isStudent) {
        console.log("Name: ".concat(student_module_js_2.studentName, ", Age: ").concat(std.studentAge));
    }
}
displayStudentStatus();
var getPersonData = new student_module_js_1.Person("Spider", 80);
getPersonData.display();
