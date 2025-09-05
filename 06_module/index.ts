// module export and import
import { Person } from "./student_module.js";
import { studentName as name, studentAge, isStudent } from "./student_module.js";
import * as std from "./student_module.js";

function displayStudentStatus(): void {
    if (isStudent) {
        console.log(`Name: ${name}, Age: ${std.studentAge}`);
    }
}
displayStudentStatus();


let getPersonData = new Person("Spider", 80)
getPersonData.display()
