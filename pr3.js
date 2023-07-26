// The let keyword
let variableLet = "This is a let variable.";

// The const keyword
const PI = 3.14159;

// Arrow Functions
const addNumbers = (num1, num2) => num1 + num2;

// The (Spread Of) ... Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const obj1 = { name: "Jyot", age: 19 };
const obj2 = { ...obj1, gender: "Male" };

// For/of Loop
const iterableArray = [10, 20, 30];
for (const element of iterableArray) {
  console.log(element);
}

// Map Objects
const mapObj = new Map();
mapObj.set("name", "Jyot");
mapObj.set("age", 19);

// Set Objects
const setObj = new Set([1, 2, 2, 3, 3, 4, 5]);

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
  }
}

const Jyot = new Person("Jyot", 19);

// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
};

fetchData().then((data) => {
  console.log(data);
});

// Symbol
const symbolKey = Symbol("uniqueKey");
const objWithSymbol = { [symbolKey]: "This is a symbol key." };

// Default Parameters
const greetPerson = (name = "Guest") => {
  console.log(`Hello, ${name}!`);
};

// Function Rest Parameter
const sumNumbers = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

// Test the code
console.log(variableLet);
console.log("PI:", PI);
console.log("Sum:", addNumbers(5, 7));
console.log("arr2:", arr2);
console.log("obj2:", obj2);
mapObj.forEach((value, key) => console.log(`${key}: ${value}`));
console.log("Set:", setObj);
Jyot.sayHello();
objWithSymbol[symbolKey] = "Updated symbol key.";
console.log(objWithSymbol[symbolKey]);
greetPerson("Jyot");
greetPerson();
console.log("Sum of numbers:", sumNumbers(1, 2, 3, 4, 5));