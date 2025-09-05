
// classes, constructor and method

class Person {
    // property, constructor and method

    userName: string; // by default public
    userAge: number;

    constructor(name: string, age: number) {
        this.userName = name;
        this.userAge = age;
    }
    display(): void {
        console.log(`name is ${this.userName}, age is ${this.userAge}`);

    }
}
let getPersonData = new Person("Ranajit", 30)
// getPersonData.display()


//  class inheritance

class Employee extends Person {
    empCode: number; // by default public

    constructor(name: string, age: number, code: number) {
        super(name, age); // calling parent class constructor, it is send value to parent class constructor
        this.empCode = code;
    }
    displayEmp(): void {
        console.log(`name is ${this.userName}, age is ${this.userAge}, empCode is ${this.empCode}`); // accessing parent class property
    }
}

let emp = new Employee("Max", 30, 1001);
// emp.display();
// emp.displayEmp();


//  abstract class
abstract class Animal {
    abstract makeSound(): void; // abstract method, there is no body and must be implemented in derived class
    move(): void {
        console.log("roaming the earth...");
    } // regular method
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Abstract method implemented in derived class: Ranajit");
    }
}
let dog = new Dog();
// dog.makeSound();
// dog.move();


// encapsulation: public, private, protected, readonly
class BankAccount {
    readonly id: number; // readonly property
    name: string; // public property
    private _balance: number; // private property, only accessible within the class
    protected bankName: string; // protected property, accessible within the class and its subclasses but not outside the class access or modify
    static branch: string = "New York"; // static property, accessible without creating an instance of the class
    constructor(id: number, name: string, balance: number, bankName: string) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this.bankName = bankName;
    }
    getBalance(): number { // public method to access private property
        return this._balance;
    }
    setBalance(amount: number): void { // public method to modify private property
        if (amount > 0) {
            this._balance = amount;
        } else {
            console.log("Invalid amount");
        }
    }
    static getBranch(): string { // static method to access static property
        return BankAccount.branch;
    }
    display(): void {
        console.log(`id: ${this.id}, name: ${this.name}, balance: ${this._balance}, bankName: ${this.bankName}`);
    }
}

let myAccount = new BankAccount(1, "Max", 1000, "Bank of America");
myAccount.display();
console.log(myAccount.getBalance()); // accessing private property via public method
myAccount.setBalance(2000); // modifying private property via public method
console.log(myAccount.getBalance()); // accessing private property via public method
console.log(BankAccount.getBranch()); // accessing static property via static method
// myAccount.id = 2; // error: cannot assign to 'id' because it is a read-only property
