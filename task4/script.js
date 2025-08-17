// => 1 (String)
let fullName = "Nour Hassan";
console.log(fullName.length);

let newFullName = fullName.trim();
console.log(newFullName.length);

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

console.log(newFullName.split("")[3]);
console.log(fullName.toLowerCase().includes("nour"));

// => 2 (Array)
let fruits = ["apple", "banana", "mango"];
console.log(fruits);

fruits.push("orange");
console.log(fruits);

fruits.unshift("kiwi");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(fruits.indexOf("mango"));

let upperFruits = fruits.map(f => f.toUpperCase);
console.log(upperFruits);

let aFruits = fruits.filter(f => f[0].toLowerCase() === "b");
console.log(aFruits);

// => 3 (Math)

console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.round(5.1), Math.trunc(5.1), Math.floor(5.1), Math.ceil(5.1));
console.log(Math.round(5.6), Math.trunc(5.6), Math.floor(5.6), Math.ceil(5.6));
console.log(Math.sqrt(64));
console.log(Math.max(3, 8, 20, 1));
console.log(Math.min(3, 8, 20, 1));

// => 4 (Ternary Operator)
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

// => 5 (Object)
let person = {
  name: "Ali",
  age: 25,
  address: "Cairo",
  displayInfo: function () {
    console.log(this.name, this.age, this.address);
  },
  contact: {
    phone: "0100000000",
    email: "ali@mail.com",
    displayContactInfo: function () {
      console.log(this.phone, this.email);
    }
  }
};
person.displayInfo();
person.contact.displayContactInfo();

// => 6 (Destructuring)
let { name, Age, contact: { phone } } = person;
console.log(name, age, phone);

let [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit);

// => 7 (Spread / Rest Operators)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged);

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// =>8  (Template Literal)
let userName = "Omar";
let userAge = 22;
console.log("Hello", userName, "you are", userAge, "years old");