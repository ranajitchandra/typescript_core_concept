export let studentName: string = "Ranajit";
export let studentAge: number = 30;
export let isStudent: boolean = true;



export class Person {
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
