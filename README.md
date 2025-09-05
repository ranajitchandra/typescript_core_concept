# 📘 TypeScript Learning Guide

This repository is designed to help beginners **learn and practice TypeScript**.  
TypeScript is a **strongly typed superset of JavaScript** that compiles into plain JavaScript.

---

## 🔍 What is TypeScript?

- TypeScript adds **static typing** to JavaScript.  
- It helps you find errors early during development.  
- It supports modern JavaScript features plus **types, interfaces, and classes**.  
- Any valid JavaScript code is also valid TypeScript code.

---

## ✨ Benefits of TypeScript

- ✅ **Type Safety** – Detect errors before running code.  
- ✅ **Code Readability** – Clear contracts with types and interfaces.  
- ✅ **Better IDE Support** – Autocomplete, refactoring, and IntelliSense.  
- ✅ **Scalability** – Useful for large projects with many developers.  
- ✅ **Modern Features** – Supports ES6+ features and compiles to older JavaScript if needed.  

---

## Major Syntax & Features


```ts
### 1. Basic Types

let username: string = "John";
let age: number = 25;
let isActive: boolean = true;

### 2. Arrays & Tuples

let numbers: number[] = [1, 2, 3];
let person: [string, number] = ["Alice", 30];

### 3. Functions

function add(a: number, b: number): number {
  return a + b;
}

### 4. Interfaces

interface User {
  id: number;
  name: string;
}

const user: User = { id: 1, name: "Bob" };

### 5. Classes

class Animal {
  constructor(public name: string) {}
  makeSound(): void {
    console.log(`${this.name} makes a sound`);
  }
}

const dog = new Animal("Dog");
dog.makeSound();


### 6. Generics

function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(100);
let str = identity<string>("Hello");


## How to Use TypeScript

    - (insatll typescript) npm install -g typescript
    - (Initialize Config) npm init -y
    - (Compile file and watch) tsc index.ts --watch
    - (Run code) nodemon index.js

