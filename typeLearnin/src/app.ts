let fruits = ["Apple" , "Mango" , "Banane"];
// 1. forEach: Loop through the array and print each item
fruits.forEach(fruit => {

console.log(fruit)

});


console.log("----------------------------------------------");
// 2. map: Create a new array by modifying each element
let upperfruits = fruits.map( fruit => fruit.toUpperCase());
console.log(upperfruits);



console.log("----------------------------------------------");
// 3. filter: Create a new array with elements that pass a test
let fruitsfilter = fruits.filter( fruit => fruit.length>5);
console.log(fruitsfilter);


console.log("----------------------------------------------");
// 4. find: Find the first element that matches a condition
let findfruits = fruits.find(fruit => fruit === "Mango");
console.log(findfruits);



console.log("----------------------------------------------");
// 5. reduce: Combine all elements into one value (e.g., sum)
let totalfruits = fruits.reduce((total, fruit)  => total+ fruit.length, 0 );
console.log(totalfruits);



console.log("----------------------------------------------");
// 6. push: Add a new element to the end of the array
fruits.push("Zitrone");
console.log(fruits);

// 7. pop: Remove the last element of the array
console.log("----------------------------------------------");
fruits.pop();
console.log(fruits);





// Object

const user ={

name : "salar",
age: 22,

sayHi(){

    return `i i am ${this.name}`;
}, 

dateBirth(){

    this.age++;
    return this.age;

}

};

console.log(user.sayHi());
console.log(user.dateBirth());


console.log("-----------------------------------------");
// Object.keys -> list of keys
const person = { name : "jack", city : " Berlin" , age : 25 };
console.log(Object.keys(person));
// Object.values -> list of values
console.log(Object.values(person));
// Object.entries -> pairs (key, value)
console.log(Object.entries(person));
// Object.assign -> merge objects (copies into first one)
console.log(Object.assign({}, person , {age : 30}));
// hasOwnProperty -> check if key exists in the objec
console.log(person.hasOwnProperty("name"));

/* Type	Description
String	A text of characters enclosed in quotes => let lastName = "Johnson";
Number	A number representing a mathematical value => let length = 16;
Bigint	A number representing a large integer => let y = BigInt(1234567890123456789012345)
Boolean	A data type representing true or false => let x = true;
Object	A collection of key-value pairs of data => const person = {firstName:"John", lastName:"Doe"};
Undefined	A primitive variable with no assigned value => let y;
Null	A primitive value representing object absence => let y = null;
Symbol	A unique and primitive identifier (Symbols are often used as object property keys to avoid name collisions.)
=> const y = Symbol(); */
