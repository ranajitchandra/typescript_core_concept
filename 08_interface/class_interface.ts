// Interface with class
// we can implement interface in class using implements keyword
// the class should have all the properties and methods defined in the interface
interface IUserFormatter {
    formatUser : () => string;
}

class User implements IUserFormatter {
    constructor( private id : number, private name : string ) {}
    formatUser = () => {
        return `User id is ${this.id} and name is ${this.name}`;
    }
} // class implements interface

// creating object of class

let user1 = new User(101, "Manikanta");
console.log(user1.formatUser()); // calling method of class